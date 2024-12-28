"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const UserValidationSchemaZod = zod_1.z.object({
    name: zod_1.z.string()
        .max(20, { message: '"name" cannot be more than 20 characters' })
        .trim()
        .min(1, { message: '"Name" cannot be an empty field' })
        .refine(value => typeof value === 'string', { message: '"Name" should be a type of string' }),
    email: zod_1.z.string()
        .email({ message: 'Email must be a valid email' })
        .min(1, { message: 'Email is required' }),
    role: zod_1.z.enum(['user', 'admin'], { errorMap: () => ({ message: '{#label} is not a valid role' }) }),
    password: zod_1.z.string()
        .max(20, { message: 'Password cannot be more than 20 characters' })
        .min(1, { message: 'Password is required' })
        .refine(value => typeof value === 'string', { message: 'Password must be a string' }),
    phone: zod_1.z.string()
        .min(1, { message: 'Phone number is required' }),
    address: zod_1.z.string()
        .min(1, { message: 'Address is required' }),
});
exports.default = UserValidationSchemaZod;
