import { isValidObjectId } from "mongoose";
import { ApiResponse } from "../../utils/api-response.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import Branches from "./branch.model.js";

export const getAllBranchesController = asyncHandler(async (req, res) => {
  const branches = await Branches.find();
  res.json(new ApiResponse(200, branches));
});

// ===========================================================

export const createBranchController = asyncHandler(async (req, res) => {
  const { name, address } = req.body;
  const existBranch = await Branches.findOne({ name });
  if (existBranch) {
    res
      .status(400)
      .json(new ApiResponse(400, null, "this branch is already exist"));
  }
  const newBranch = await Branches.create({ name, address });
  res.json(new ApiResponse(201, newBranch, "created new branch successful"));
});

// ====================================================================
export const updateBranchController = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const update = req.body;
  const isValidID = isValidObjectId(id);
  if (!isValidID) {
    res.status(400).json(new ApiResponse(400, null, "invalid branch id"));
  }
  const updatedBranch = await Branches.findByIdAndUpdate(id, update, {
    new: true,
  });
  if (!updatedBranch) {
    res.status(400).json(new ApiResponse(404, null, "Branch not found"));
  }

  res.json(new ApiResponse(200, updatedBranch, "Branch updated successfully"));
});

// =======================================================
export const deleteBranchController = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    res.status(400).json(new ApiResponse(400, null, "invalid brunch id"));
  }
  const deletedBranch = await Branches.findByIdAndDelete(id);
  if (!deletedBranch) {
    res.status(404).json(new ApiResponse(404, null, "Branch not found"));
  }
  res.status(204).send();
});
