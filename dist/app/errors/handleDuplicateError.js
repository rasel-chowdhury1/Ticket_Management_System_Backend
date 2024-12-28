"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleDuplicateError = (err) => {
    const match = err.errmsg.match(/"([^"]*)"/);
    const extractedMessage = match && match[1];
    const errorSources = [
        {
            path: '',
            message: `${extractedMessage} is a already exists.`
        }
    ];
    const statusCode = 400;
    return {
        statusCode,
        message: "Duplicate Value",
        errorSources
    };
};
exports.default = handleDuplicateError;
