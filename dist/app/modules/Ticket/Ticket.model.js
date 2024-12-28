"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketModel = void 0;
const mongoose_1 = require("mongoose");
const TicketSchema = new mongoose_1.Schema({
    bus: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Bus",
        required: true,
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        default: null,
    },
    seat: {
        type: String,
        required: true,
    },
    dateSlot: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    isSold: {
        type: Boolean,
        default: false,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});
exports.TicketModel = (0, mongoose_1.model)("Ticket", TicketSchema);
