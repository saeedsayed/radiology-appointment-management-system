import { isValidObjectId } from "mongoose";
import { ApiResponse } from "../../utils/api-response.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import Radiologies from "./radiology.model.js";

export const getAllRadiologiesController = asyncHandler(async (req, res) => {
  const radiologies = await Radiologies.find().populate("category");
  res.json(new ApiResponse(200, radiologies));
});

// ====================================================================
export const createRadiologyController = asyncHandler(async (req, res) => {
  const radiology = req.body;
  const newRadiology = await (
    await Radiologies.create(radiology)
  ).populate("category");
  res.json(new ApiResponse(200, newRadiology, "radiology created successfully"));
});
// ====================================================================
export const updateRadiologyController = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const update = req.body;
  if (!isValidObjectId(id)) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, "invalid radiology id"));
  }
  const newRadiology = await Radiologies.findByIdAndUpdate(id, update, {
    new: true,
    runValidators: true,
  }).populate("category");
  res.json(new ApiResponse(200, newRadiology, "radiology updated successfully"));
});
// ====================================================

export const deleteRadiologyController = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    res.status(400).json(new ApiResponse(400, null, "invalid radiology id"));
  }
  const deletedRadiology = await Radiologies.findByIdAndDelete(id);
  if (!deletedRadiology) {
    res.status(404).json(new ApiResponse(404, null, "radiology not found"));
  }
  res.status(204).send();
});
