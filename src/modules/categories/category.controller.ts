import { isValidObjectId, Types } from "mongoose";
import { ApiResponse } from "../../utils/api-response.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import Category from "./category.model.js";
import Radiologies from "../radiologies/radiology.model.js";

export const getAllCategoriesController = asyncHandler(async (req, res) => {
  const radiologies = await Category.find();
  res.json(new ApiResponse(200, radiologies));
});

// ===========================================================

export const createCategoryController = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const existCategory = await Category.findOne({ name });
  if (existCategory) {
    res
      .status(400)
      .json(new ApiResponse(400, null, "this category is already exist"));
  }
  const newCategory = await Category.create({
    name,
  });
  res.json(
    new ApiResponse(201, newCategory, "created new category successful"),
  );
});

// ====================================================================
export const updateCategoryController = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const isValidID = isValidObjectId(id);
  if (!isValidID) {
    res.status(400).json(new ApiResponse(400, null, "invalid category id"));
  }
  const updatedCategory = await Category.findByIdAndUpdate(
    id,
    { name },
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
});

// ====================================================

export const deleteCategoryController = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (typeof id !== "string" || !isValidObjectId(id)) {
    res.status(400).json(new ApiResponse(400, null, "invalid category id"));
    return;
  }
  const categoryId = new Types.ObjectId(id);
  await Radiologies.deleteMany({ category: categoryId });
  const deletedRadiologyCategory = await Category.findByIdAndDelete(categoryId);
  if (!deletedRadiologyCategory) {
    res.status(404).json(new ApiResponse(404, null, "category not found"));
  }
  res.status(204).send();
});
