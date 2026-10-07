import z from "zod";
export declare const createReservationSchema: z.ZodObject<{
    date: z.ZodString;
    notes: z.ZodOptional<z.ZodString>;
    branch: z.ZodString;
    radiologies: z.ZodArray<z.ZodString>;
    fromPartner: z.ZodString;
    clientName: z.ZodString;
    clientAge: z.ZodNumber;
    clientPhone: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=reservation.schema.d.ts.map