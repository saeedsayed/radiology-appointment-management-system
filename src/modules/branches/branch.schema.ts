import Z from "zod";
import mongoose from "mongoose";

const availableRadiologyItemSchema = Z.object({
  radiology: Z.string({ error: "Radiology id is required" }).refine(
    (value) => mongoose.Types.ObjectId.isValid(value),
    {
      message: "invalid radiology id",
    },
  ),
  price: Z
    .number({ error: "Price is required" })
    .positive("Price must be a positive number"),
  salePrice: Z
    .number({ error: "Sale price is required" })
    .positive("Sale price must be a positive number"),
});

const availableRadiologySchema = Z.array(
  availableRadiologyItemSchema,
  "availableRadiology must be an array",
).refine(
  (entries) =>
    new Set(entries.map((entry) => entry.radiology)).size === entries.length,
  { message: "Each radiology can only be listed once per branch" },
);

export const createBranchSchema = Z.object({
  name: Z.string("the branch name is required").min(3),
  address: Z.string("the branch address is required").min(3),
  availableRadiology: availableRadiologySchema.optional(),
});

export const updateBranchSchema = createBranchSchema.partial();
