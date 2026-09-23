import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { ApiResponse } from "../utils/api-response.js";

export const auth = (req: Request, res: Response, next: NextFunction): void => {
  const JWT_SECRET = process.env.JWT_SECRET!;
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res
      .status(401)
      .json(new ApiResponse(401, null, "Access denied. No token provided."));
    return;
  }

  const token = authHeader.split(" ")[1] as string;

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as {
      id: string;
      username: string;
    };
    req.user = decoded;
    next();
  } catch {
    res
      .status(401)
      .json(new ApiResponse(401, null, "Invalid or expired token."));
  }
};
