import mongoose, {} from "mongoose";
import Clients from "./client.model.js";
import { isValidObjectId } from "mongoose";
export const createClientService = async (clientData) => {
    const existClient = await Clients.findOne({ name: clientData.name });
    if (!!existClient) {
        return existClient._id;
    }
    const newClient = await Clients.create(clientData);
    return newClient._id;
};
export const updateClientService = async ({ id, update, }) => {
    if (!mongoose.isValidObjectId(id)) {
        throw new Error("The client ID is invalid");
    }
    const updatedClient = await Clients.findByIdAndUpdate(id, { $set: update }, {
        new: true,
        runValidators: true,
    }).populate("reservations");
    if (!updatedClient) {
        throw new Error("Client not found");
    }
    return updatedClient;
};
export const addReservationToClientService = async ({ clientId, reservationId, }) => {
    if (!mongoose.isValidObjectId(clientId)) {
        throw new Error("The client ID is invalid");
    }
    if (!mongoose.isValidObjectId(reservationId)) {
        throw new Error("The reservation ID is invalid");
    }
    const updatedClient = await Clients.findByIdAndUpdate(clientId, {
        $addToSet: {
            reservations: reservationId,
        },
    }, {
        new: true,
        runValidators: true,
    }).populate("reservations");
    if (!updatedClient) {
        throw new Error("Client not found");
    }
    return updatedClient;
};
//# sourceMappingURL=client.service.js.map