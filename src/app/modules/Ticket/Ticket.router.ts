import express from "express";
import { TicketValidationZod } from "./Ticket.validationZod";
import { TicketController } from "./Ticket.controller";
import auth from "../../middelwares/auth";
import validateRequest from "../../middelwares/validRequest";


const router = express.Router();

// Admin routes for ticket management
router.post(
  "/admin/ticket",
  auth("admin"),
  validateRequest(TicketValidationZod.CreateTicketValidationSchema),
  TicketController.createTicket
);

router.put(
  "/admin/ticket/:id",
  auth("admin"),
  validateRequest(TicketValidationZod.UpdateTicketValidationSchema),
  TicketController.updateTicket
);

router.delete(
  "/admin/ticket/:id",
  auth("admin"),
  TicketController.deleteTicket
);

// Public routes for tickets
router.get(
  "/tickets",
  TicketController.getAllTickets
);

router.get(
  "/tickets/available",
  TicketController.getAvailableTickets
);

router.get(
  "/ticket/:id",
  TicketController.getSingleTicket
);

// User route for purchasing tickets
router.post(
  "/ticket/purchase",
  auth("user"), // Ensures only authenticated users can purchase tickets
  TicketController.purchaseTicket
);

export const TicketRouter = router;
