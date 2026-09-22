import mongoose from "mongoose";
import z from "zod";
export const createRadiologySchema = z.object({
  name: z.string({ error: "Name is required" }).min(1, "Name cannot be empty"),
  price: z
    .number({ error: "Price is required" })
    .positive("Price must be a positive number"),
  category: z
    .string()
    .refine((value) => mongoose.Types.ObjectId.isValid(value), {
      message: "invalid category id",
    }),
});
