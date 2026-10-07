import z from "zod";
export declare const createRadiologySchema: z.ZodObject<{
    name: z.ZodString;
    category: z.ZodString;
}, z.core.$strip>;
export declare const updateRadiologySchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    category: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
//# sourceMappingURL=radiology.schema.d.ts.map