import { z } from "zod";
import mongoose from "mongoose";

const objectIdSchema = z
  .string("the profit share category is require")
  .refine((val) => mongoose.Types.ObjectId.isValid(val), {
    message: "Invalid category id",
  });

const profitShareItemSchema = z.object({
  category: objectIdSchema,
  value: z.number("the profit share value is require"),
});

export const createPartnerSchema = z.object({
  name: z.string().optional(),
  profitShare: z.array(
    profitShareItemSchema,
    "the profit share list is require",
  ),
});
