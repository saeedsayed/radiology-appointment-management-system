import type { PublicFilters } from "../middlewares/public-filter.middleware.js";

declare global {
  namespace Express {
    interface Request {
      filters: PublicFilters;
      user?: {
        id: string;
        username: string;
      };
    }
  }
}

export {};
