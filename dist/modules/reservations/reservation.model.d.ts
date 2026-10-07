import mongoose from "mongoose";
export declare const reservationStates: readonly ["complete", "pending", "missed"];
declare const Reservations: mongoose.Model<{
    state: "complete" | "missed" | "pending";
    date?: NativeDate | null;
    notes?: string | null;
    branch?: mongoose.Types.ObjectId | null;
    client?: mongoose.Types.ObjectId | null;
    radiologies: mongoose.Types.ObjectId[];
    fromPartner?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    state: "complete" | "missed" | "pending";
    date?: NativeDate | null;
    notes?: string | null;
    branch?: mongoose.Types.ObjectId | null;
    client?: mongoose.Types.ObjectId | null;
    radiologies: mongoose.Types.ObjectId[];
    fromPartner?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    state: "complete" | "missed" | "pending";
    date?: NativeDate | null;
    notes?: string | null;
    branch?: mongoose.Types.ObjectId | null;
    client?: mongoose.Types.ObjectId | null;
    radiologies: mongoose.Types.ObjectId[];
    fromPartner?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    state: "complete" | "missed" | "pending";
    date?: NativeDate | null;
    notes?: string | null;
    branch?: mongoose.Types.ObjectId | null;
    client?: mongoose.Types.ObjectId | null;
    radiologies: mongoose.Types.ObjectId[];
    fromPartner?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    state: "complete" | "missed" | "pending";
    date?: NativeDate | null;
    notes?: string | null;
    branch?: mongoose.Types.ObjectId | null;
    client?: mongoose.Types.ObjectId | null;
    radiologies: mongoose.Types.ObjectId[];
    fromPartner?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    state: "complete" | "missed" | "pending";
    date?: NativeDate | null;
    notes?: string | null;
    branch?: mongoose.Types.ObjectId | null;
    client?: mongoose.Types.ObjectId | null;
    radiologies: mongoose.Types.ObjectId[];
    fromPartner?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
    state: "complete" | "missed" | "pending";
    date?: NativeDate | null;
    notes?: string | null;
    branch?: mongoose.Types.ObjectId | null;
    client?: mongoose.Types.ObjectId | null;
    radiologies: mongoose.Types.ObjectId[];
    fromPartner?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
    state: "complete" | "missed" | "pending";
    date?: NativeDate | null;
    notes?: string | null;
    branch?: mongoose.Types.ObjectId | null;
    client?: mongoose.Types.ObjectId | null;
    radiologies: mongoose.Types.ObjectId[];
    fromPartner?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default Reservations;
//# sourceMappingURL=reservation.model.d.ts.map