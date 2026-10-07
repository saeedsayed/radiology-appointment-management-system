import { z } from "zod";
export declare const createPartnerSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    profitShare: z.ZodArray<z.ZodObject<{
        category: z.ZodString;
        value: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
//# sourceMappingURL=partner.schma.d.ts.map