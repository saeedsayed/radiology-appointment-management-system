import { isValidObjectId } from "mongoose";
import { ApiResponse } from "../../utils/api-response.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import Partners from "./partners.model.js";

export const getAllPartnersController = asyncHandler(async (req, res) => {
  const partners = await Partners.find().populate("profitShare.category");
  res.json(new ApiResponse(200, partners));
});

// ===========================================================

export const createPartnerController = asyncHandler(async (req, res) => {
  const { name, profitShare } = req.body;
  const existBranch = await Partners.findOne({ name });
  if (existBranch) {
    res
      .status(400)
      .json(new ApiResponse(400, null, "this Partner is already exist"));
  }
  const newBranch = await (
    await Partners.create({ name, profitShare })
  ).populate("profitShare.category");
  res.json(new ApiResponse(201, newBranch, "created new partner successful"));
});

// ====================================================================
export const updatePartnerController = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { name, profitShare } = req.body;

  if (!isValidObjectId(id)) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, "Invalid partner id"));
  }

  const partner = await Partners.findById(id);
  if (!partner) {
    return res
      .status(404)
      .json(new ApiResponse(404, null, "partner not found"));
  }

  if (name !== undefined) {
    partner.name = name;
  }

  if (Array.isArray(profitShare) && profitShare.length > 0) {
    const incomingMap = new Map(profitShare.map((p) => [p.category, p.value]));

    // Update existing categories
    partner.profitShare.forEach((p) => {
      if (incomingMap.has(p.category?.toString())) {
        p.value = incomingMap.get(p.category?.toString());
        console.log("p.radiologyCategory", p.category);
        incomingMap.delete(p.category?.toString());
      }
    });

    // Whatever's left in incomingMap didn't exist before — add as new entries
    incomingMap.forEach((value, category) => {
      partner.profitShare.push({ category, value });
    });
  }

  const updatedPartner = await partner.save();
  const responseData = await updatedPartner.populate("profitShare.category");

  return res
    .status(200)
    .json(new ApiResponse(200, responseData, "Partner updated successfully"));
});

// =======================================================
export const deletePartnerController = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    res.status(400).json(new ApiResponse(400, null, "invalid partner id"));
  }
  const deletedBranch = await Partners.findByIdAndDelete(id);
  if (!deletedBranch) {
    res.status(404).json(new ApiResponse(404, null, "partner not found"));
  }
  res.status(204).send();
});
