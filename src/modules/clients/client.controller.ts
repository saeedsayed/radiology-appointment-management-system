import { ApiResponse } from "../../utils/api-response.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import Clients from "./client.model.js";

export const getAllClientsController = asyncHandler(async (req, res) => {
  const clients = await Clients.find().populate("reservations");
  res.json(new ApiResponse(200, clients));
});
