import { ApiError } from "../utils/api-response.js";
export const errorHandler = (err, req, res, next) => {
    const statusCode = err instanceof ApiError ? err.statusCode : 500;
    const message = err.message || "Internal Server Error";
    const errors = err instanceof ApiError ? err.errors : [];
    const databaseError = err;
    if (databaseError.code === 11000) {
        res.status(400).json({
            success: false,
            statusCode: 400,
            message: `you duplicate a uniq value db err message => ${databaseError.errorResponse?.errmsg ?? ""}`,
            data: databaseError.keyValue,
        });
        return;
    }
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
        errors,
        ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
    });
};
//# sourceMappingURL=error-handler.middleware.js.map