import { isValidObjectId } from "mongoose";
import { ApiResponse } from "../../utils/api-response.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { addReservationToBranchService } from "../branches/branch.service.js";
import {
  addReservationToClientService,
  createClientService,
} from "../clients/client.service.js";
import Reservations, {
  reservationStates,
} from "./reservation.model.js";

export const getAllReservationsController = asyncHandler(async (req, res) => {
  const reservations = await Reservations.find().populate([
    "client",
    "branch",
    "radiologies",
    "fromPartner",
  ]);
  res.json(new ApiResponse(200, reservations));
});
// ================================================================================

export const createReservationController = asyncHandler(async (req, res) => {
  const {
    date,
    notes,
    branch,
    radiologies,
    fromPartner,
    clientName,
    clientAge,
    clientPhone,
  } = req.body;
  const client = await createClientService({
    name: clientName,
    age: clientAge,
    phoneNumber: clientPhone,
  });
  const newReservation = await Reservations.create({
    date,
    branch,
    radiologies,
    fromPartner,
    notes,
    client,
  });
  await addReservationToClientService({
    clientId: client,
    reservationId: newReservation._id,
  });
  await addReservationToBranchService({
    branchId: branch,
    reservationId: newReservation._id,
  });
  const newReservationPopulations = await newReservation.populate([
    "client",
    "branch",
    "radiologies",
    "fromPartner",
  ]);
  res.json(new ApiResponse(201, newReservationPopulations));
});

// ================================================================================

export const updateReservationStateController = asyncHandler(
  async (req, res) => {
    const { id } = req.params;
    const { state } = req.body;
    if (!isValidObjectId(id)) {
      res
        .status(400)
        .json(new ApiResponse(400, null, "invalid reservation id"));
      return;
    }
    if (!reservationStates.includes(state)) {
      res
        .status(400)
        .json(
          new ApiResponse(400, null, "state must be complete, pending or missed"),
        );
      return;
    }
    const updatedReservation = await Reservations.findByIdAndUpdate(
      id,
      { state },
      { new: true },
    ).populate(["client", "branch", "radiologies", "fromPartner"]);
    if (!updatedReservation) {
      res
        .status(404)
        .json(new ApiResponse(404, null, "Reservation not found"));
      return;
    }
    res.json(
      new ApiResponse(200, updatedReservation, "Reservation state updated successfully"),
    );
  },
);
