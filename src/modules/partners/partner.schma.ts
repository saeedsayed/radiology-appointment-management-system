import { z } from "zod";
import mongoose from "mongoose";

const objectIdSchema = z
  .string()
  .refine((val) => mongoose.Types.ObjectId.isValid(val), {
    message: "Invalid ObjectId",
  });

const profitShareItemSchema = z.object({
  radiologyCategory: objectIdSchema.optional(),
  value: z.number().optional(),
});

export const createPartnerSchema = z.object({
  name: z.string().optional(),
  profitShare: z.array(profitShareItemSchema).optional(),
});
