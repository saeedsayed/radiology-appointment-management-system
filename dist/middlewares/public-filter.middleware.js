import { ApiError } from "../utils/api-response.js";
const DEFAULT_PUBLIC_FILTER_KEYS = [
    "search",
    "page",
    "limit",
    "sort",
    "order",
];
const MAX_PAGE_LIMIT = 100;
const isPrimitive = (value) => typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean";
export const publicFilter = (allowedKeys = []) => {
    const allowed = new Set([
        ...DEFAULT_PUBLIC_FILTER_KEYS,
        ...allowedKeys,
    ]);
    return (req, res, next) => {
        try {
            const filters = {};
            for (const [key, rawValue] of Object.entries(req.query)) {
                if (!allowed.has(key) || rawValue === undefined) {
                    continue;
                }
                if (Array.isArray(rawValue)) {
                    const items = [];
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
                        const expectation = key === "limit"
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
        }
        catch (error) {
            next(error);
        }
    };
};
//# sourceMappingURL=public-filter.middleware.js.map