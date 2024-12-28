"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusModel = void 0;
const mongoose_1 = require("mongoose");
const BusSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    number: {
        type: String,
        required: true,
        unique: true
    },
    route: {
        type: String,
        required: true,
    },
    capacity: {
        type: Number,
        required: true,
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
});
exports.BusModel = (0, mongoose_1.model)("Bus", BusSchema);
