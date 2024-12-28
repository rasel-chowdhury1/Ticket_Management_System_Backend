"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketValidationZod = void 0;
const zod_1 = require("zod");
// A reusable regex for validating date format (YYYY-MM-DD)
const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
const CreateTicketValidationSchema = zod_1.z.object({
    bus: zod_1.z.string().nonempty("Bus ID is required"),
    price: zod_1.z.number().positive("Price must be a positive number"),
    seat: zod_1.z.string().nonempty("Seat name is required"),
    dateSlot: zod_1.z.string()
        .nonempty("Date slot is required")
        .refine((value) => dateRegex.test(value), {
        message: "Date slot must be in YYYY-MM-DD format",
    })
        .refine((value) => {
        const today = new Date();
        const providedDate = new Date(value);
        return providedDate >= new Date(today.toISOString().split("T")[0]);
    }, {
        message: "Date slot must be today or a future date",
    }),
});
const UpdateTicketValidationSchema = zod_1.z.object({
    price: zod_1.z.number().positive().optional(),
    seat: zod_1.z.string().optional(),
    dateSlot: zod_1.z.string()
        .optional()
        .refine((value) => (value ? dateRegex.test(value) : true), {
        message: "Date slot must be in YYYY-MM-DD format",
    })
        .refine((value) => {
        if (!value)
            return true; // Skip validation if no dateSlot is provided
        const today = new Date();
        const providedDate = new Date(value);
        return providedDate >= new Date(today.toISOString().split("T")[0]);
    }, {
        message: "Date slot must be today or a future date",
    }),
    isSold: zod_1.z.boolean().optional(),
    isDeleted: zod_1.z.boolean().optional(),
});
exports.TicketValidationZod = {
    CreateTicketValidationSchema,
    UpdateTicketValidationSchema,
};
