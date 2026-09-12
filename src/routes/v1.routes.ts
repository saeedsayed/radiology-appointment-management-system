import { type Express } from "express";
import branchesRoutes from "../modules/branches/branch.route.js";
import radiologiesRoutes from "../modules/radiologies/radiology.route.js";
import partnersRoutes from "../modules/partners/partner.route.js";
import clientsRoutes from "../modules/clients/client.route.js";

const ROUTE_PREFIX = "/api/v1";

export default function v1Routes(app: Express) {
  app.use(ROUTE_PREFIX + "/check", (req, res) => {
    res.json({
      status: "success",
    });
  });
  app.use(`${ROUTE_PREFIX}/branches`, branchesRoutes);
  app.use(`${ROUTE_PREFIX}/radiologies`, radiologiesRoutes);
  app.use(`${ROUTE_PREFIX}/partners`, partnersRoutes);
  app.use(`${ROUTE_PREFIX}/clients`, clientsRoutes);
}
