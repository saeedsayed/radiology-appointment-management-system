import express from "express";
import {
  createBranchController,
  deleteBranchController,
  getAllBranchesController,
  getBranchDetailsController,
  updateBranchController,
} from "./branch.controller.js";
import { validate } from "../../middlewares/validate.middleware.js";
import { publicFilter } from "../../middlewares/public-filter.middleware.js";
import { createBranchSchema, updateBranchSchema } from "./branch.schema.js";

const router = express.Router();

router
  .route("/")
  .get(publicFilter(["name", "availableRadiology"]), getAllBranchesController)
  .post(validate(createBranchSchema), createBranchController);

router
  .route("/:id")
  .get(getBranchDetailsController)
  .put(validate(updateBranchSchema), updateBranchController)
  .delete(deleteBranchController);

export default router;
