import mongoose from "mongoose";
declare const Partners: mongoose.Model<{
    name?: string | null;
    clients: mongoose.Types.ObjectId[];
    profitShare: mongoose.Types.DocumentArray<{
        category?: mongoose.Types.ObjectId | null;
        value?: number | null;
        _id?: unknown;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        category?: mongoose.Types.ObjectId | null;
        value?: number | null;
        _id?: unknown;
    }, {}, {}> & {
        category?: mongoose.Types.ObjectId | null;
        value?: number | null;
        _id?: unknown;
    }>;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    name?: string | null;
    clients: mongoose.Types.ObjectId[];
    profitShare: mongoose.Types.DocumentArray<{
        category?: mongoose.Types.ObjectId | null;
        value?: number | null;
        _id?: unknown;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        category?: mongoose.Types.ObjectId | null;
        value?: number | null;
        _id?: unknown;
    }, {}, {}> & {
        category?: mongoose.Types.ObjectId | null;
        value?: number | null;
        _id?: unknown;
    }>;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    name?: string | null;
    clients: mongoose.Types.ObjectId[];
    profitShare: mongoose.Types.DocumentArray<{
        category?: mongoose.Types.ObjectId | null;
        value?: number | null;
        _id?: unknown;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        category?: mongoose.Types.ObjectId | null;
        value?: number | null;
        _id?: unknown;
    }, {}, {}> & {
        category?: mongoose.Types.ObjectId | null;
        value?: number | null;
        _id?: unknown;
    }>;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    name?: string | null;
    clients: mongoose.Types.ObjectId[];
    profitShare: mongoose.Types.DocumentArray<{
        category?: mongoose.Types.ObjectId | null;
        value?: number | null;
        _id?: unknown;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        category?: mongoose.Types.ObjectId | null;
        value?: number | null;
        _id?: unknown;
    }, {}, {}> & {
        category?: mongoose.Types.ObjectId | null;
        value?: number | null;
        _id?: unknown;
    }>;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    name?: string | null;
    clients: mongoose.Types.ObjectId[];
    profitShare: mongoose.Types.DocumentArray<{
        category?: mongoose.Types.ObjectId | null;
        value?: number | null;
        _id?: unknown;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        category?: mongoose.Types.ObjectId | null;
        value?: number | null;
        _id?: unknown;
    }, {}, {}> & {
        category?: mongoose.Types.ObjectId | null;
        value?: number | null;
        _id?: unknown;
    }>;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    name?: string | null;
    clients: mongoose.Types.ObjectId[];
    profitShare: mongoose.Types.DocumentArray<{
        category?: mongoose.Types.ObjectId | null;
        value?: number | null;
        _id?: unknown;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        category?: mongoose.Types.ObjectId | null;
        value?: number | null;
        _id?: unknown;
    }, {}, {}> & {
        category?: mongoose.Types.ObjectId | null;
        value?: number | null;
        _id?: unknown;
    }>;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
    name?: string | null;
    clients: mongoose.Types.ObjectId[];
    profitShare: mongoose.Types.DocumentArray<{
        category?: mongoose.Types.ObjectId | null;
        value?: number | null;
        _id?: {};
    }, mongoose.Types.Subdocument<{}, unknown, {
        category?: mongoose.Types.ObjectId | null;
        value?: number | null;
        _id?: {};
    }, {}, {}> & {
        category?: mongoose.Types.ObjectId | null;
        value?: number | null;
        _id?: {};
    }>;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
    name?: string | null;
    clients: mongoose.Types.ObjectId[];
    profitShare: mongoose.Types.DocumentArray<{
        category?: mongoose.Types.ObjectId | null;
        value?: number | null;
        _id?: {};
    }, mongoose.Types.Subdocument<{}, unknown, {
        category?: mongoose.Types.ObjectId | null;
        value?: number | null;
        _id?: {};
    }, {}, {}> & {
        category?: mongoose.Types.ObjectId | null;
        value?: number | null;
        _id?: {};
    }>;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default Partners;
//# sourceMappingURL=partners.model.d.ts.map