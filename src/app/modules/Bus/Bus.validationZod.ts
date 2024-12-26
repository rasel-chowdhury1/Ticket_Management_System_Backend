import { z } from "zod";

const CreateBusValidationSchema = z.object({
    name: z
      .string()
      .trim()
      .nonempty({ message: '"Name" cannot be an empty field' })
      .refine(value => typeof value === "string", { message: '"Name" should be a type of string' }),
    route: z
      .string()
      .trim()
      .nonempty({ message: '"Route" cannot be an empty field' })
      .refine(value => typeof value === "string", { message: '"Route" should be a type of string' }),
    capacity: z
      .number()
      .int({ message: '"Capacity" must be an integer' })
      .positive({ message: '"Capacity" must be a positive number' }),
    isDeleted: z.boolean().optional(),
  });

const UpdateBusValidationSchema = z.object({
  name: z.string()
         .trim()
         .optional(),
  route: z.string()
          .trim()
          .optional(),
  capacity: z.number()
             .optional(),
  isDeleted: z.boolean().optional()
});

export const BusValidationZod = {
    CreateBusValidationSchema,
    UpdateBusValidationSchema
}