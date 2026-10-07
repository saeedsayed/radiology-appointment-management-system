import mongoose from "mongoose";
export declare const createClientService: (clientData: {
    name: string;
    age: number;
    phoneNumber: string;
}) => Promise<mongoose.Types.ObjectId>;
export declare const updateClientService: ({ id, update, }: {
    id: mongoose.Types.ObjectId;
    update: {
        name?: string;
        age?: number;
        phoneNumber?: string;
    };
}) => Promise<mongoose.Document<unknown, {}, {
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
}>>;
export declare const addReservationToClientService: ({ clientId, reservationId, }: {
    clientId: mongoose.Types.ObjectId;
    reservationId: mongoose.Types.ObjectId;
}) => Promise<mongoose.Document<unknown, {}, {
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
}>>;
//# sourceMappingURL=client.service.d.ts.map