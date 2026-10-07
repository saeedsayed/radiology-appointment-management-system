import mongoose from "mongoose";
export declare const addReservationToBranchService: ({ branchId, reservationId, }: {
    branchId: mongoose.Types.ObjectId;
    reservationId: mongoose.Types.ObjectId;
}) => Promise<mongoose.Document<unknown, {}, {
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
}>>;
//# sourceMappingURL=branch.service.d.ts.map