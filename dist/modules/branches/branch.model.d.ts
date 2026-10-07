import mongoose from "mongoose";
declare const Branches: mongoose.Model<{
    name?: string | null;
    address?: string | null;
    availableRadiology: mongoose.Types.DocumentArray<{
        radiology: mongoose.Types.ObjectId;
        price: number;
        salePrice: number;
        _id?: unknown;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        radiology: mongoose.Types.ObjectId;
        price: number;
        salePrice: number;
        _id?: unknown;
    }, {}, {}> & {
        radiology: mongoose.Types.ObjectId;
        price: number;
        salePrice: number;
        _id?: unknown;
    }>;
    workSchedule: mongoose.Types.DocumentArray<{
        weekday?: number | null;
        openTime?: number | null;
        closeTime?: number | null;
        _id?: unknown;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        weekday?: number | null;
        openTime?: number | null;
        closeTime?: number | null;
        _id?: unknown;
    }, {}, {}> & {
        weekday?: number | null;
        openTime?: number | null;
        closeTime?: number | null;
        _id?: unknown;
    }>;
    reservations: mongoose.Types.ObjectId[];
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    name?: string | null;
    address?: string | null;
    availableRadiology: mongoose.Types.DocumentArray<{
        radiology: mongoose.Types.ObjectId;
        price: number;
        salePrice: number;
        _id?: unknown;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        radiology: mongoose.Types.ObjectId;
        price: number;
        salePrice: number;
        _id?: unknown;
    }, {}, {}> & {
        radiology: mongoose.Types.ObjectId;
        price: number;
        salePrice: number;
        _id?: unknown;
    }>;
    workSchedule: mongoose.Types.DocumentArray<{
        weekday?: number | null;
        openTime?: number | null;
        closeTime?: number | null;
        _id?: unknown;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        weekday?: number | null;
        openTime?: number | null;
        closeTime?: number | null;
        _id?: unknown;
    }, {}, {}> & {
        weekday?: number | null;
        openTime?: number | null;
        closeTime?: number | null;
        _id?: unknown;
    }>;
    reservations: mongoose.Types.ObjectId[];
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    name?: string | null;
    address?: string | null;
    availableRadiology: mongoose.Types.DocumentArray<{
        radiology: mongoose.Types.ObjectId;
        price: number;
        salePrice: number;
        _id?: unknown;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        radiology: mongoose.Types.ObjectId;
        price: number;
        salePrice: number;
        _id?: unknown;
    }, {}, {}> & {
        radiology: mongoose.Types.ObjectId;
        price: number;
        salePrice: number;
        _id?: unknown;
    }>;
    workSchedule: mongoose.Types.DocumentArray<{
        weekday?: number | null;
        openTime?: number | null;
        closeTime?: number | null;
        _id?: unknown;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        weekday?: number | null;
        openTime?: number | null;
        closeTime?: number | null;
        _id?: unknown;
    }, {}, {}> & {
        weekday?: number | null;
        openTime?: number | null;
        closeTime?: number | null;
        _id?: unknown;
    }>;
    reservations: mongoose.Types.ObjectId[];
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
    address?: string | null;
    availableRadiology: mongoose.Types.DocumentArray<{
        radiology: mongoose.Types.ObjectId;
        price: number;
        salePrice: number;
        _id?: unknown;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        radiology: mongoose.Types.ObjectId;
        price: number;
        salePrice: number;
        _id?: unknown;
    }, {}, {}> & {
        radiology: mongoose.Types.ObjectId;
        price: number;
        salePrice: number;
        _id?: unknown;
    }>;
    workSchedule: mongoose.Types.DocumentArray<{
        weekday?: number | null;
        openTime?: number | null;
        closeTime?: number | null;
        _id?: unknown;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        weekday?: number | null;
        openTime?: number | null;
        closeTime?: number | null;
        _id?: unknown;
    }, {}, {}> & {
        weekday?: number | null;
        openTime?: number | null;
        closeTime?: number | null;
        _id?: unknown;
    }>;
    reservations: mongoose.Types.ObjectId[];
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    name?: string | null;
    address?: string | null;
    availableRadiology: mongoose.Types.DocumentArray<{
        radiology: mongoose.Types.ObjectId;
        price: number;
        salePrice: number;
        _id?: unknown;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        radiology: mongoose.Types.ObjectId;
        price: number;
        salePrice: number;
        _id?: unknown;
    }, {}, {}> & {
        radiology: mongoose.Types.ObjectId;
        price: number;
        salePrice: number;
        _id?: unknown;
    }>;
    workSchedule: mongoose.Types.DocumentArray<{
        weekday?: number | null;
        openTime?: number | null;
        closeTime?: number | null;
        _id?: unknown;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        weekday?: number | null;
        openTime?: number | null;
        closeTime?: number | null;
        _id?: unknown;
    }, {}, {}> & {
        weekday?: number | null;
        openTime?: number | null;
        closeTime?: number | null;
        _id?: unknown;
    }>;
    reservations: mongoose.Types.ObjectId[];
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    name?: string | null;
    address?: string | null;
    availableRadiology: mongoose.Types.DocumentArray<{
        radiology: mongoose.Types.ObjectId;
        price: number;
        salePrice: number;
        _id?: unknown;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        radiology: mongoose.Types.ObjectId;
        price: number;
        salePrice: number;
        _id?: unknown;
    }, {}, {}> & {
        radiology: mongoose.Types.ObjectId;
        price: number;
        salePrice: number;
        _id?: unknown;
    }>;
    workSchedule: mongoose.Types.DocumentArray<{
        weekday?: number | null;
        openTime?: number | null;
        closeTime?: number | null;
        _id?: unknown;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        weekday?: number | null;
        openTime?: number | null;
        closeTime?: number | null;
        _id?: unknown;
    }, {}, {}> & {
        weekday?: number | null;
        openTime?: number | null;
        closeTime?: number | null;
        _id?: unknown;
    }>;
    reservations: mongoose.Types.ObjectId[];
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
    address?: string | null;
    availableRadiology: mongoose.Types.DocumentArray<{
        radiology: mongoose.Types.ObjectId;
        price: number;
        salePrice: number;
        _id?: {};
    }, mongoose.Types.Subdocument<{}, unknown, {
        radiology: mongoose.Types.ObjectId;
        price: number;
        salePrice: number;
        _id?: {};
    }, {}, {}> & {
        radiology: mongoose.Types.ObjectId;
        price: number;
        salePrice: number;
        _id?: {};
    }>;
    workSchedule: mongoose.Types.DocumentArray<{
        weekday?: number | null;
        openTime?: number | null;
        closeTime?: number | null;
        _id?: {};
    }, mongoose.Types.Subdocument<{}, unknown, {
        weekday?: number | null;
        openTime?: number | null;
        closeTime?: number | null;
        _id?: {};
    }, {}, {}> & {
        weekday?: number | null;
        openTime?: number | null;
        closeTime?: number | null;
        _id?: {};
    }>;
    reservations: mongoose.Types.ObjectId[];
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
    name?: string | null;
    address?: string | null;
    availableRadiology: mongoose.Types.DocumentArray<{
        radiology: mongoose.Types.ObjectId;
        price: number;
        salePrice: number;
        _id?: {};
    }, mongoose.Types.Subdocument<{}, unknown, {
        radiology: mongoose.Types.ObjectId;
        price: number;
        salePrice: number;
        _id?: {};
    }, {}, {}> & {
        radiology: mongoose.Types.ObjectId;
        price: number;
        salePrice: number;
        _id?: {};
    }>;
    workSchedule: mongoose.Types.DocumentArray<{
        weekday?: number | null;
        openTime?: number | null;
        closeTime?: number | null;
        _id?: {};
    }, mongoose.Types.Subdocument<{}, unknown, {
        weekday?: number | null;
        openTime?: number | null;
        closeTime?: number | null;
        _id?: {};
    }, {}, {}> & {
        weekday?: number | null;
        openTime?: number | null;
        closeTime?: number | null;
        _id?: {};
    }>;
    reservations: mongoose.Types.ObjectId[];
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default Branches;
//# sourceMappingURL=branch.model.d.ts.map