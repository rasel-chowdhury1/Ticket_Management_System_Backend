"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusValidationZod = void 0;
const zod_1 = require("zod");
const CreateBusValidationSchema = zod_1.z.object({
    name: zod_1.z
        .string()
        .trim()
        .nonempty({ message: '"Name" cannot be an empty field' })
        .refine(value => typeof value === "string", { message: '"Name" should be a type of string' }),
    number: zod_1.z
        .string()
        .trim()
        .nonempty({ message: '"Bus number " cannot be an empty field' })
        .refine(value => typeof value === "string", { message: '"Bus number" should be a type of string' }),
    route: zod_1.z
        .string()
        .trim()
        .nonempty({ message: '"Route" cannot be an empty field' })
        .refine(value => typeof value === "string", { message: '"Route" should be a type of string' }),
    capacity: zod_1.z
        .number()
        .int({ message: '"Capacity" must be an integer' })
        .positive({ message: '"Capacity" must be a positive number' }),
    isDeleted: zod_1.z.boolean().optional(),
});
const UpdateBusValidationSchema = zod_1.z.object({
    name: zod_1.z.string()
        .trim()
        .optional(),
    route: zod_1.z.string()
        .trim()
        .optional(),
    capacity: zod_1.z.number()
        .optional(),
    isDeleted: zod_1.z.boolean().optional()
});
exports.BusValidationZod = {
    CreateBusValidationSchema,
    UpdateBusValidationSchema
};
