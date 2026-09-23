import mongoose from "mongoose";
import z from "zod";

export const createRadiologySchema = z.object({
  name: z.string({ error: "Name is required" }).min(1, "Name cannot be empty"),
  category: z
    .string()
    .refine((value) => mongoose.Types.ObjectId.isValid(value), {
      message: "invalid category id",
    }),
});

export const updateRadiologySchema = createRadiologySchema.partial();
