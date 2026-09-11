import { isValidObjectId } from "mongoose";
import { ApiResponse } from "../../utils/api-response.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import Radiologies from "./radiology.model.js";

export const getAllRadiologiesController = asyncHandler(async (req, res) => {
  const radiologies = await Radiologies.find();
  res.json(new ApiResponse(200, radiologies));
});

// ===========================================================

export const createRadiologyCategoryController = asyncHandler(
  async (req, res) => {
    const { category, radiologies } = req.body;
    const existCategory = await Radiologies.findOne({ category });
    if (existCategory) {
      res
        .status(400)
        .json(new ApiResponse(400, null, "this category is already exist"));
    }
    const newCategory = await Radiologies.create({
      category,
      radiologies,
    });
    res.json(
      new ApiResponse(201, newCategory, "created new category successful"),
    );
  },
);

// ====================================================================
export const updateRadiologyCategoryController = asyncHandler(
  async (req, res) => {
    const { id } = req.params;
    const { category } = req.body;
    const isValidID = isValidObjectId(id);
    if (!isValidID) {
      res.status(400).json(new ApiResponse(400, null, "invalid category id"));
    }
    const updatedCategory = await Radiologies.findByIdAndUpdate(
      id,
      { category },
      {
        new: true,
      },
    );
    if (!updatedCategory) {
      res.status(400).json(new ApiResponse(404, null, "category not found"));
    }

    res.json(
      new ApiResponse(200, updatedCategory, "category updated successfully"),
    );
  },
);
// ====================================================================
export const addRadiologyController = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { radiologies } = req.body;
  const isValidID = isValidObjectId(id);
  if (!isValidID) {
    res.status(400).json(new ApiResponse(400, null, "invalid category id"));
  }
  const updatedRadiologies = await Radiologies.findByIdAndUpdate(
    id,
    { $push: { radiologies: { $each: radiologies } } },
    {
      new: true,
    },
  );
  if (!updatedRadiologies) {
    res.status(400).json(new ApiResponse(404, null, "category not found"));
  }

  res.json(
    new ApiResponse(
      200,
      updatedRadiologies,
      "radiologies updated successfully",
    ),
  );
});
// ====================================================================
export const deleteRadiologyController = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { radiologies } = req.body;
  const isValidID = isValidObjectId(id);
  if (!isValidID) {
    res.status(400).json(new ApiResponse(400, null, "invalid category id"));
  }
  const updatedRadiologies = await Radiologies.findByIdAndUpdate(
    id,
    { $pull: { radiologies: { _id: { $in: radiologies } } } },
    {
      new: true,
    },
  );
  if (!updatedRadiologies) {
    res.status(400).json(new ApiResponse(404, null, "category not found"));
  }

  res.json(
    new ApiResponse(
      200,
      updatedRadiologies,
      "radiologies updated successfully",
    ),
  );
});

// ====================================================

export const deleteRadiologyCategoryController = asyncHandler(
  async (req, res) => {
    const { id } = req.params;
    if (!isValidObjectId(id)) {
      res.status(400).json(new ApiResponse(400, null, "invalid category id"));
    }
    const deletedRadiologyCategory = await Radiologies.findByIdAndDelete(id);
    if (!deletedRadiologyCategory) {
      res.status(404).json(new ApiResponse(404, null, "category not found"));
    }
    res.status(204).send();
  },
);
