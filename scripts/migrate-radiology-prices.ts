import { configDotenv } from "dotenv";
import mongoose from "mongoose";
import { connectDB } from "../src/utils/db.js";

configDotenv();

await connectDB();
if (mongoose.connection.readyState !== 1) {
  console.error("Could not connect to MongoDB.");
  process.exit(1);
}

const db = mongoose.connection.db;
if (!db) {
  console.error("No database handle available.");
  process.exit(1);
}

const branchesCol = db.collection("branches");
const radiologiesCol = db.collection("radiologies");
const categoriesCol = db.collection("categories");

const [branches, radiologies, categories] = await Promise.all([
  branchesCol.find({}).toArray(),
  radiologiesCol.find({}).toArray(),
  categoriesCol.find({}).toArray(),
]);

const categoryIds = new Set(categories.map((doc) => String(doc._id)));
const radiologyIds = new Set(radiologies.map((doc) => String(doc._id)));

type PriceInfo = {
  byBranch: Map<string, number>;
  legacy?: number;
  any?: number;
};

const radiologyInfo = new Map<string, PriceInfo>();
for (const doc of radiologies) {
  const info: PriceInfo = { byBranch: new Map() };
  if (Array.isArray(doc.prices)) {
    for (const entry of doc.prices) {
      if (entry && entry.branch != null && typeof entry.price === "number") {
        info.byBranch.set(String(entry.branch), entry.price);
      }
    }
    const first = doc.prices[0];
    if (first && typeof first.price === "number") info.any = first.price;
  }
  if (typeof doc.price === "number") {
    info.legacy = doc.price;
    if (info.any === undefined) info.any = doc.price;
  }
  radiologyInfo.set(String(doc._id), info);
}

const priceFor = (radiologyId: string, branchId: string): number | null => {
  const info = radiologyInfo.get(radiologyId);
  if (!info) return null;
  return (
    info.byBranch.get(branchId) ?? info.legacy ?? info.any ?? null
  );
};

const isEntryObject = (entry: unknown): entry is Record<string, unknown> =>
  typeof entry === "object" && entry !== null && !Array.isArray(entry);

let migratedBranches = 0;

for (const branch of branches) {
  const branchId = String(branch._id);
  const oldList = Array.isArray(branch.availableRadiology)
    ? branch.availableRadiology
    : [];
  const entries: { radiology: unknown; price: number; salePrice: number }[] =
    [];
  const seen = new Set<string>();

  const addEntry = (radiologyId: string, price: number) => {
    if (seen.has(radiologyId)) return;
    seen.add(radiologyId);
    entries.push({
      radiology: new mongoose.Types.ObjectId(radiologyId),
      price,
      salePrice: price,
    });
  };

  for (const old of oldList) {
    if (isEntryObject(old)) {
      if (old.radiology == null || typeof old.price !== "number") continue;
      const radiologyId = String(old.radiology);
      if (seen.has(radiologyId)) continue;
      const salePrice =
        typeof old.salePrice === "number" ? old.salePrice : old.price;
      seen.add(radiologyId);
      entries.push({
        radiology: new mongoose.Types.ObjectId(radiologyId),
        price: old.price,
        salePrice,
      });
      continue;
    }

    const id = String(old);
    if (categoryIds.has(id)) {
      for (const radiology of radiologies) {
        if (String(radiology.category) !== id) continue;
        const price = priceFor(String(radiology._id), branchId);
        if (price === null) {
          console.warn(
            `Skipping radiology "${radiology.name}" on branch "${branch.name}" — no price found.`,
          );
          continue;
        }
        addEntry(String(radiology._id), price);
      }
      continue;
    }

    if (radiologyIds.has(id)) {
      const price = priceFor(id, branchId);
      if (price === null) {
        console.warn(
          `Skipping radiology ${id} on branch "${branch.name}" — no price found.`,
        );
        continue;
      }
      addEntry(id, price);
      continue;
    }

    console.warn(
      `Branch "${branch.name}": dropping unknown availableRadiology id ${id}.`,
    );
  }

  // Seed any radiology that had a per-branch price but was not listed yet.
  for (const [radiologyId, info] of radiologyInfo) {
    if (seen.has(radiologyId)) continue;
    const price = info.byBranch.get(branchId);
    if (price !== undefined) addEntry(radiologyId, price);
  }

  await branchesCol.updateOne(
    { _id: branch._id },
    { $set: { availableRadiology: entries } },
  );
  migratedBranches += 1;
  console.log(
    `Branch "${branch.name}": ${entries.length} available radiology entr(y/ies) with price + salePrice.`,
  );
}

const unsetResult = await radiologiesCol.updateMany(
  { $or: [{ prices: { $exists: true } }, { price: { $exists: true } }] },
  { $unset: { prices: "", price: "" } },
);

console.log(
  `Done. ${migratedBranches} branch(es) updated, ${unsetResult.modifiedCount} radiology document(s) stripped of price fields.`,
);
await mongoose.disconnect();
