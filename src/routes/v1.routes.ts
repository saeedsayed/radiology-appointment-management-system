import { type Express } from "express";
import { publicFilter } from "../middlewares/public-filter.middleware.js";
import branchesRoutes from "../modules/branches/branch.route.js";
import radiologiesRoutes from "../modules/radiologies/radiology.route.js";
import partnersRoutes from "../modules/partners/partner.route.js";
import clientsRoutes from "../modules/clients/client.route.js";
import reservationsRoutes from "../modules/reservations/reservation.route.js";
import categoriesRoutes from "../modules/categories/category.route.js";

const ROUTE_PREFIX = "/api/v1";

export default function v1Routes(app: Express) {
  app.get(ROUTE_PREFIX + "/check", publicFilter(), (req, res) => {
    res.json({
      status: "success",
    });
  });
  app.use(`${ROUTE_PREFIX}/branches`, branchesRoutes);
  app.use(`${ROUTE_PREFIX}/radiologies`, radiologiesRoutes);
  app.use(`${ROUTE_PREFIX}/partners`, partnersRoutes);
  app.use(`${ROUTE_PREFIX}/clients`, clientsRoutes);
  app.use(`${ROUTE_PREFIX}/reservations`, reservationsRoutes);
  app.use(`${ROUTE_PREFIX}/categories`, categoriesRoutes);
}
