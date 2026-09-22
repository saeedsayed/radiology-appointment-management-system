import express from "express";
import { getAllClientsController } from "./client.controller.js";
import { publicFilter } from "../../middlewares/public-filter.middleware.js";

const router = express.Router();

router.route("/").get(publicFilter(), getAllClientsController);

export default router;
