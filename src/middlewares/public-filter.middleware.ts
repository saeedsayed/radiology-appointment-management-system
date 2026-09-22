import type { NextFunction, Request, RequestHandler, Response } from "express";
import { ApiError } from "../utils/api-response.js";

export type PublicFilterValue =
  | string
  | number
  | boolean
  | Array<string | number | boolean>;

export type PublicFilters = Record<string, PublicFilterValue>;

const DEFAULT_PUBLIC_FILTER_KEYS = [
  "search",
  "page",
  "limit",
  "sort",
  "order",
] as const;

const MAX_PAGE_LIMIT = 100;

const isPrimitive = (value: unknown): value is string | number | boolean =>
  typeof value === "string" ||
  typeof value === "number" ||
  typeof value === "boolean";

export const publicFilter = (allowedKeys: string[] = []): RequestHandler => {
  const allowed = new Set<string>([
    ...DEFAULT_PUBLIC_FILTER_KEYS,
    ...allowedKeys,
  ]);

  return (req: Request, res: Response, next: NextFunction): void => {
    try {
      const filters: PublicFilters = {};

      for (const [key, rawValue] of Object.entries(req.query)) {
        if (!allowed.has(key) || rawValue === undefined) {
          continue;
        }

        if (Array.isArray(rawValue)) {
          const items: Array<string | number | boolean> = [];
          for (const item of rawValue) {
            if (!isPrimitive(item)) {
              throw new ApiError(400, `invalid query parameter: ${key}`, [
                `query.${key} must only contain primitive values`,
              ]);
            }
            items.push(item);
          }
          filters[key] = items;
          continue;
        }

        if (!isPrimitive(rawValue)) {
          throw new ApiError(400, `invalid query parameter: ${key}`, [
            `query.${key} must be a primitive value`,
          ]);
        }

        if (key === "page" || key === "limit") {
          const parsed = Number(rawValue);
          const max = key === "limit" ? MAX_PAGE_LIMIT : Number.MAX_SAFE_INTEGER;
          if (!Number.isInteger(parsed) || parsed < 1 || parsed > max) {
            const expectation =
              key === "limit"
                ? `query.limit must be an integer between 1 and ${MAX_PAGE_LIMIT}`
                : "query.page must be a positive integer";
            throw new ApiError(400, `invalid query parameter: ${key}`, [
              expectation,
            ]);
          }
          filters[key] = parsed;
          continue;
        }

        filters[key] = rawValue;
      }

      req.filters = filters;
      next();
    } catch (error) {
      next(error);
    }
  };
};
