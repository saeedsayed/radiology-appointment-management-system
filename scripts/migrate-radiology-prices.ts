import { configDotenv } from "dotenv";
import mongoose from "mongoose";
import Branches from "../src/modules/branches/branch.model.js";
import Radiologies from "../src/modules/radiologies/radiology.model.js";
import { connectDB } from "../src/utils/db.js";

configDotenv();

await connectDB();
if (mongoose.connection.readyState !== 1) {
  console.error("Could not connect to MongoDB.");
  process.exit(1);
}

const branches = await Branches.find().select("_id").lean();
const branchIds = branches.map((branch) => branch._id);

if (branchIds.length === 0) {
  console.log("No branches found — nothing to migrate.");
  process.exit(0);
}

const radiologies = await Radiologies.collection.find({}).toArray();
let migrated = 0;

for (const doc of radiologies) {
  const prices = Array.isArray(doc.prices) ? doc.prices : [];
  const pricedBranches = new Set(
    prices.map((entry: { branch?: unknown }) => String(entry?.branch)),
  );
  const missing = branchIds.filter((id) => !pricedBranches.has(String(id)));
  if (missing.length === 0) {
    continue;
  }

  const legacyPrice =
    typeof doc.price === "number"
      ? doc.price
      : prices.length > 0
        ? prices[0].price
        : null;

  if (legacyPrice === null) {
    console.warn(
      `Skipping radiology ${doc._id} ("${doc.name}") — no legacy price to fill missing branches.`,
    );
    continue;
  }

  await Radiologies.collection.updateOne(
    { _id: doc._id },
    {
      $set: {
        prices: [
          ...prices,
          ...missing.map((branch) => ({ branch, price: legacyPrice })),
        ],
      },
      $unset: { price: "" },
    },
  );
  migrated += 1;
  console.log(
    `Migrated "${doc.name}" — price ${legacyPrice} applied to ${missing.length} branch(es).`,
  );
}

console.log(`Done. ${migrated} radiology document(s) migrated.`);
await mongoose.disconnect();
