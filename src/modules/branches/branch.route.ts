import express from "express";
import {
  createBranchController,
  deleteBranchController,
  getAllBranchesController,
  updateBranchController,
} from "./branch.controller.js";
import { validate } from "../../middlewares/validate.middleware.js";
import { publicFilter } from "../../middlewares/public-filter.middleware.js";
import { createBranchSchema } from "./branch.schema.js";

const router = express.Router();

router
  .route("/")
  .get(publicFilter(["name", "availableRadiology"]), getAllBranchesController)
  .post(validate(createBranchSchema), createBranchController);

router.route("/:id").put(updateBranchController).delete(deleteBranchController);

export default router;
