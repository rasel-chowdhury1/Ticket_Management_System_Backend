"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const handleCastError_1 = __importDefault(require("../errors/handleCastError"));
const handleDuplicateError_1 = __importDefault(require("../errors/handleDuplicateError"));
const AppError_1 = __importDefault(require("../errors/AppError"));
const zod_1 = require("zod");
const handleZodError_1 = __importDefault(require("../errors/handleZodError"));
const handleValidationError_1 = __importDefault(require("../errors/handleValidationError"));
const GlobalErrorHandler = (err, req, res, next) => {
    var _a;
    //setting default values
    let statusCode = err.statusCode || 500;
    let message = err.message || "Something went wrong";
    let errorSources = [{
            path: '',
            message: 'Something went wrong',
        }];
    if (err instanceof zod_1.ZodError) {
        const simplifiedError = (0, handleZodError_1.default)(err);
        statusCode = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.statusCode;
        message = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.message;
        errorSources = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.errorSources;
    }
    else if ((err === null || err === void 0 ? void 0 : err.name) === 'ValidationError') {
        const simplifiedError = (0, handleValidationError_1.default)(err);
        statusCode = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.statusCode;
        message = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.message;
        errorSources = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.errorSources;
    }
    else if ((err === null || err === void 0 ? void 0 : err.name) === "CastError") {
        const castError = (0, handleCastError_1.default)(err);
        statusCode = castError.statusCode;
        message = castError.message;
        errorSources = castError.errorSources;
    }
    else if (((_a = err === null || err === void 0 ? void 0 : err.errorResponse) === null || _a === void 0 ? void 0 : _a.code) === 11000) {
        const errData = (0, handleDuplicateError_1.default)(err.errorResponse);
        statusCode = errData.statusCode;
        message = errData.message;
        errorSources = errData.errorSources;
    }
    else if (err instanceof AppError_1.default) {
        statusCode = err === null || err === void 0 ? void 0 : err.statusCode;
        message = err === null || err === void 0 ? void 0 : err.message;
    }
    res.status(statusCode).json({
        success: false,
        message,
        errorSources,
        err
    });
};
exports.default = GlobalErrorHandler;
{ /**
{
 success
 message
 errorSources: [
   path: '',
   message: ''
 ]
}
*/
}
