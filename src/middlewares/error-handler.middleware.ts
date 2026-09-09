import type { Request, Response, NextFunction } from "express";
import { ApiError } from "../utils/api-response.js";

export const errorHandler = (
  err: Error | ApiError,
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const statusCode = err instanceof ApiError ? err.statusCode : 500;
  const message = err.message || "Internal Server Error";
  const errors = err instanceof ApiError ? err.errors : [];
  //   if (err.code === 11000) {
  //   res.status(400).json({
  //     status: STATUS.ERROR,
  //     message: `you duplicate a uniq value db err message => ${err.errorResponse.errmsg}`,
  //     code: 400,
  //     data: err.keyValue,
  //   });
  // }

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
    errors,
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
};
