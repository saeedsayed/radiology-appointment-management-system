import mongoose from "mongoose";
declare const Clients: mongoose.Model<{
    name?: string | null;
    age?: number | null;
    phoneNumber?: string | null;
    reservations: mongoose.Types.ObjectId[];
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    name?: string | null;
    age?: number | null;
    phoneNumber?: string | null;
    reservations: mongoose.Types.ObjectId[];
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    name?: string | null;
    age?: number | null;
    phoneNumber?: string | null;
    reservations: mongoose.Types.ObjectId[];
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name?: string | null;
    age?: number | null;
    phoneNumber?: string | null;
    reservations: mongoose.Types.ObjectId[];
}, mongoose.Document<unknown, {}, {
    name?: string | null;
    age?: number | null;
    phoneNumber?: string | null;
    reservations: mongoose.Types.ObjectId[];
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    name?: string | null;
    age?: number | null;
    phoneNumber?: string | null;
    reservations: mongoose.Types.ObjectId[];
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    name?: string | null;
    age?: number | null;
    phoneNumber?: string | null;
    reservations: mongoose.Types.ObjectId[];
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    name?: string | null;
    age?: number | null;
    phoneNumber?: string | null;
    reservations: mongoose.Types.ObjectId[];
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default Clients;
//# sourceMappingURL=client.model.d.ts.map