import type { Request, Response, NextFunction } from "express";
import { ApiError } from "../utils/api-response.js";
export declare const errorHandler: (err: Error | ApiError, req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=error-handler.middleware.d.ts.map