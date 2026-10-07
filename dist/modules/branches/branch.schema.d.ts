import Z from "zod";
export declare const createBranchSchema: Z.ZodObject<{
    name: Z.ZodString;
    address: Z.ZodString;
    availableRadiology: Z.ZodOptional<Z.ZodArray<Z.ZodObject<{
        radiology: Z.ZodString;
        price: Z.ZodNumber;
        salePrice: Z.ZodNumber;
    }, Z.core.$strip>>>;
}, Z.core.$strip>;
export declare const updateBranchSchema: Z.ZodObject<{
    name: Z.ZodOptional<Z.ZodString>;
    address: Z.ZodOptional<Z.ZodString>;
    availableRadiology: Z.ZodOptional<Z.ZodOptional<Z.ZodArray<Z.ZodObject<{
        radiology: Z.ZodString;
        price: Z.ZodNumber;
        salePrice: Z.ZodNumber;
    }, Z.core.$strip>>>>;
}, Z.core.$strip>;
//# sourceMappingURL=branch.schema.d.ts.map