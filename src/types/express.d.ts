import type { PublicFilters } from "../middlewares/public-filter.middleware.js";

declare global {
  namespace Express {
    interface Request {
      filters: PublicFilters;
    }
  }
}

export {};
