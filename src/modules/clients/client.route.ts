import express from "express";
import { getAllClientsController } from "./client.controller.js";

const router = express.Router();

router.route("/").get(getAllClientsController);

export default router;
