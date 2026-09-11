import { type Express } from "express";
import branchesRoutes from "../modules/branches/branch.route.js";

const ROUTE_PREFIX = "/api/v1";

export default function v1Routes(app: Express) {
  app.use(ROUTE_PREFIX + "/check", (req, res) => {
    res.json({
      status: "success",
    });
  });
  app.use(`${ROUTE_PREFIX}/branches`, branchesRoutes);
}
