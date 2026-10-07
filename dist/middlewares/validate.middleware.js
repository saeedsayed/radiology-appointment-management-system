import { ZodError, ZodObject, ZodString } from "zod";
import { ApiError } from "../utils/api-response.js";
export const validate = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        next();
    }
    catch (error) {
        if (error instanceof ZodError) {
            const errorsMsg = JSON.parse(error.message).map((e) => e.message);
            const err = new ApiError(400, errorsMsg.join(" & "), errorsMsg);
            // const err = new ApiError(errorsMsg.join(" & "), 400, STATUS.FAIL);
            return next(err);
        }
        next(error);
    }
};
//# sourceMappingURL=validate.middleware.js.map