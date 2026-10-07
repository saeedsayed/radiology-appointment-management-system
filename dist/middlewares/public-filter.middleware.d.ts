import type { RequestHandler } from "express";
import type { PublicFilters, PublicFilterValue } from "../types/express.js";
export type { PublicFilterValue, PublicFilters };
export declare const publicFilter: (allowedKeys?: string[]) => RequestHandler;
//# sourceMappingURL=public-filter.middleware.d.ts.map