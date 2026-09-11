import express from "express";
import {
  addRadiologyController,
  createRadiologyCategoryController,
  deleteRadiologyCategoryController,
  deleteRadiologyController,
  getAllRadiologiesController,
  updateRadiologyCategoryController,
} from "./radiology.controller.js";
import { validate } from "../../middlewares/validate.middleware.js";
import {
  addRadiologySchema,
  createRadiologyCategorySchema,
  deleteRadiologySchema,
} from "./radiology.schema.js";

const router = express.Router();

router
  .route("/")
  .get(getAllRadiologiesController)
  .post(
    validate(createRadiologyCategorySchema),
    createRadiologyCategoryController,
  );

router
  .route("/:id")
  .put(updateRadiologyCategoryController)
  .delete(deleteRadiologyCategoryController);

router
  .route("/:id/add")
  .put(validate(addRadiologySchema), addRadiologyController);
router
  .route("/:id/remove")
  .delete(validate(deleteRadiologySchema), deleteRadiologyController);

export default router;
