import z from "zod";
export const radiologyItemSchema = z.object({
  name: z.string({ error: "Name is required" }).min(1, "Name cannot be empty"),
  price: z
    .number({ error: "Price is required" })
    .positive("Price must be a positive number"),
});

export const createRadiologyCategorySchema = z.object({
  category: z
    .string({ error: "Category is required" })
    .min(1, "Category cannot be empty"),
  radiologies: z.array(radiologyItemSchema).optional(),
});

export const addRadiologySchema = z.object({
  radiologies: z.array(radiologyItemSchema, "the radiologies must be an array"),
});
export const deleteRadiologySchema = z.object({
  radiologies: z.array(z.string(), "the radiologies must be an array"),
});
