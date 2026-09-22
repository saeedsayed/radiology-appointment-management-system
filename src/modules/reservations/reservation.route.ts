import express from "express";
import {
  createReservationController,
  getAllReservationsController,
  updateReservationStateController,
} from "./reservation.controller.js";
import { validate } from "../../middlewares/validate.middleware.js";
import { publicFilter } from "../../middlewares/public-filter.middleware.js";
import { createReservationSchema } from "./reservation.schema.js";

const router = express.Router();

router
  .route("/")
  .get(publicFilter(["state", "date"]), getAllReservationsController)
  .post(validate(createReservationSchema), createReservationController);

router.patch("/:id/state", updateReservationStateController);

export default router;
