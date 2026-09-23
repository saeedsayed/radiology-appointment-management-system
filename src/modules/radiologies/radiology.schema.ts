import mongoose from "mongoose";
import z from "zod";

const branchIdSchema = z
  .string({ error: "Branch id is required" })
  .refine((value) => mongoose.Types.ObjectId.isValid(value), {
    message: "invalid branch id",
  });

const radiologyPriceSchema = z.object({
  branch: branchIdSchema,
  price: z
    .number({ error: "Price is required" })
    .positive("Price must be a positive number"),
});

export const createRadiologySchema = z.object({
  name: z.string({ error: "Name is required" }).min(1, "Name cannot be empty"),
  prices: z
    .array(radiologyPriceSchema, "Prices are required")
    .refine(
      (prices) =>
        new Set(prices.map((entry) => entry.branch)).size === prices.length,
      { message: "Each branch can only have one price" },
    ),
  category: z
    .string()
    .refine((value) => mongoose.Types.ObjectId.isValid(value), {
      message: "invalid category id",
    }),
});

export const updateRadiologySchema = createRadiologySchema.partial();
