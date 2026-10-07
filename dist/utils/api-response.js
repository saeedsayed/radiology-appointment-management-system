export class ApiResponse {
    success;
    statusCode;
    message;
    data;
    constructor(statusCode, data, message = "Success") {
        this.statusCode = statusCode;
        this.success = statusCode < 400;
        this.message = message;
        this.data = data;
    }
}
export class ApiError extends Error {
    statusCode;
    success;
    errors;
    data;
    constructor(statusCode, message = "Something went wrong", errors = [], stack = "") {
        super();
        this.message = message;
        this.statusCode = statusCode;
        this.success = false;
        this.errors = errors;
        this.data = null;
        if (stack) {
            this.stack = stack;
        }
        else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}
//# sourceMappingURL=api-response.js.map