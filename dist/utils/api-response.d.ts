export declare class ApiResponse<T = unknown> {
    success: boolean;
    statusCode: number;
    message: string;
    data: T;
    constructor(statusCode: number, data: T, message?: string);
}
export declare class ApiError extends Error {
    statusCode: number;
    success: false;
    errors: string[];
    data: null;
    constructor(statusCode: number, message?: string, errors?: string[], stack?: string);
}
//# sourceMappingURL=api-response.d.ts.map