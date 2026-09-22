import express from "express";
import {
  createCategoryController,
  deleteCategoryController,
  getAllCategoriesController,
  updateCategoryController,
} from "./category.controller.js";
import { validate } from "../../middlewares/validate.middleware.js";
import { createCategorySchema } from "./category.schema.js";

const router = express.Router();

router
  .route("/")
  .get(getAllCategoriesController)
  .post(validate(createCategorySchema), createCategoryController);

router
  .route("/:id")
  .put(updateCategoryController)
  .delete(deleteCategoryController);

export default router;
