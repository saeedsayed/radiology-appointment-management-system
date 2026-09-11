import { ZodError, ZodObject, ZodString } from "zod";
import { ApiError } from "../utils/api-response.js";
import type { NextFunction, Request, Response } from "express";
import type { $strip } from "zod/v4/core";

export const validate =
  (schema: ZodObject) => (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const errorsMsg = JSON.parse(error.message).map(
          (e: { message: string }) => e.message,
        );
        const err = new ApiError(400, errorsMsg.join(" & "), errorsMsg);
        // const err = new ApiError(errorsMsg.join(" & "), 400, STATUS.FAIL);
        return next(err);
      }
      next(error);
    }
  };
