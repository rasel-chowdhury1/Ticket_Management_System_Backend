import { z } from "zod";

// A reusable regex for validating date format (YYYY-MM-DD)
const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

const CreateTicketValidationSchema = z.object({
  bus: z.string().nonempty("Bus ID is required"), 
  price: z.number().positive("Price must be a positive number"),
  seat: z.string().nonempty("Seat name is required"),
  dateSlot: z.string()
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

const UpdateTicketValidationSchema = z.object({
  price: z.number().positive().optional(),
  seat: z.string().optional(),
  dateSlot: z.string()
             .optional()
             .refine((value) => (value ? dateRegex.test(value) : true), {
              message: "Date slot must be in YYYY-MM-DD format",
            })
            .refine((value) => {
              if (!value) return true; // Skip validation if no dateSlot is provided
              const today = new Date();
              const providedDate = new Date(value);
              return providedDate >= new Date(today.toISOString().split("T")[0]);
            }, {
              message: "Date slot must be today or a future date",
            }),
  isSold: z.boolean().optional(),
  isDeleted: z.boolean().optional(),
});

export const TicketValidationZod = {
  CreateTicketValidationSchema,
  UpdateTicketValidationSchema,
};
