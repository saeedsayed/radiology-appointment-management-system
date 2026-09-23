import { isValidObjectId } from "mongoose";
import { ApiError, ApiResponse } from "../../utils/api-response.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import Branches from "../branches/branch.model.js";
import Radiologies from "./radiology.model.js";

const radiologyPopulate = ["category", "prices.branch"];

type RadiologyPriceEntry = { branch: string; price: number };

const assertPricesCoverEveryBranch = async (
  prices: RadiologyPriceEntry[],
): Promise<void> => {
  const branches = await Branches.find().select("_id").lean();
  const pricedBranches = new Set(
    prices.map((entry) => entry.branch.toString()),
  );
  const missingBranchIds = branches
    .map((branch) => String(branch._id))
    .filter((branchId) => !pricedBranches.has(branchId));
  if (missingBranchIds.length > 0) {
    throw new ApiError(
      400,
      "Every radiology must have a price for every branch",
      [`Missing price for branch(es): ${missingBranchIds.join(", ")}`],
    );
  }
};

export const getAllRadiologiesController = asyncHandler(async (req, res) => {
  const radiologies = await Radiologies.find().populate(radiologyPopulate);
  res.json(new ApiResponse(200, radiologies));
});

// ====================================================================
export const createRadiologyController = asyncHandler(async (req, res) => {
  await assertPricesCoverEveryBranch(req.body.prices);
  const newRadiology = await (
    await Radiologies.create(req.body)
  ).populate(radiologyPopulate);
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
  if (update.prices) {
    await assertPricesCoverEveryBranch(update.prices);
  }
  const newRadiology = await Radiologies.findByIdAndUpdate(id, update, {
    new: true,
    runValidators: true,
  }).populate(radiologyPopulate);
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
