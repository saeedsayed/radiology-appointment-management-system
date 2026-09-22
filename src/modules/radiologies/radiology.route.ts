import express from "express";
import { validate } from "../../middlewares/validate.middleware.js";
import {
  createRadiologyController,
  deleteRadiologyController,
  getAllRadiologiesController,
  updateRadiologyController,
} from "./radiology.controller.js";
import { createRadiologySchema } from "./radiology.schema.js";

const router = express.Router();

router
  .route("/")
  .get(getAllRadiologiesController)
  .post(validate(createRadiologySchema), createRadiologyController);

router
  .route("/:id")
  .put(updateRadiologyController)
  .delete(deleteRadiologyController);

export default router;
