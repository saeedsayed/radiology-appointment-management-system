import express from "express";
import {
  createPartnerController,
  deletePartnerController,
  getAllPartnersController,
  updatePartnerController,
} from "./partner.controller.js";
import { validate } from "../../middlewares/validate.middleware.js";
import { publicFilter } from "../../middlewares/public-filter.middleware.js";
import { createPartnerSchema } from "./partner.schma.js";

const router = express.Router();

router
  .route("/")
  .get(publicFilter(), getAllPartnersController)
  .post(validate(createPartnerSchema), createPartnerController);

router
  .route("/:id")
  .put(updatePartnerController)
  .delete(deletePartnerController);

export default router;
