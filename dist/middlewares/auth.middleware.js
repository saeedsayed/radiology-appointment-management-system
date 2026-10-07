import jwt from "jsonwebtoken";
import { ApiResponse } from "../utils/api-response.js";
export const auth = (req, res, next) => {
    const JWT_SECRET = process.env.JWT_SECRET;
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        res
            .status(401)
            .json(new ApiResponse(401, null, "Access denied. No token provided."));
        return;
    }
    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch {
        res
            .status(401)
            .json(new ApiResponse(401, null, "Invalid or expired token."));
    }
};
//# sourceMappingURL=auth.middleware.js.map