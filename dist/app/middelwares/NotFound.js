"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NotFound = (req, res, next) => {
    res.status(404).json({
        success: false,
        message: 'Route not found',
        error: 'error'
    });
};
exports.default = NotFound;
