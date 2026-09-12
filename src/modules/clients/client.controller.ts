import { ApiResponse } from "../../utils/api-response.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import Clients from "./client.modle.js";

export const getAllClientsController = asyncHandler(async (req, res) => {
  const partners = await Clients.find().populate(
    "profitShare.radiologyCategory",
  );
  res.json(new ApiResponse(200, partners));
});
