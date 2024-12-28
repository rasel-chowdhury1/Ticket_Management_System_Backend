"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketRouter = void 0;
const express_1 = __importDefault(require("express"));
const Ticket_validationZod_1 = require("./Ticket.validationZod");
const Ticket_controller_1 = require("./Ticket.controller");
const auth_1 = __importDefault(require("../../middelwares/auth"));
const validRequest_1 = __importDefault(require("../../middelwares/validRequest"));
const router = express_1.default.Router();
// Admin routes for ticket management
router.post("/admin/ticket", (0, auth_1.default)("admin"), (0, validRequest_1.default)(Ticket_validationZod_1.TicketValidationZod.CreateTicketValidationSchema), Ticket_controller_1.TicketController.createTicket);
router.put("/admin/ticket/:id", (0, auth_1.default)("admin"), (0, validRequest_1.default)(Ticket_validationZod_1.TicketValidationZod.UpdateTicketValidationSchema), Ticket_controller_1.TicketController.updateTicket);
router.delete("/admin/ticket/:id", (0, auth_1.default)("admin"), Ticket_controller_1.TicketController.deleteTicket);
// Public routes for tickets
router.get("/tickets", Ticket_controller_1.TicketController.getAllTickets);
router.get("/tickets/available", Ticket_controller_1.TicketController.getAvailableTickets);
router.get("/ticket/:id", Ticket_controller_1.TicketController.getSingleTicket);
// User route for purchasing tickets
router.post("/ticket/purchase", (0, auth_1.default)("user"), // Ensures only authenticated users can purchase tickets
Ticket_controller_1.TicketController.purchaseTicket);
exports.TicketRouter = router;
