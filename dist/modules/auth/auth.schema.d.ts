import Z from "zod";
export declare const registerSchema: Z.ZodObject<{
    username: Z.ZodString;
    password: Z.ZodString;
}, Z.core.$strip>;
export declare const loginSchema: Z.ZodObject<{
    username: Z.ZodString;
    password: Z.ZodString;
}, Z.core.$strip>;
//# sourceMappingURL=auth.schema.d.ts.map