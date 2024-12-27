import express  from "express";
import { AuthRouter } from "../modules/Auth/Auth.router";
import { BusRouter } from "../modules/Bus/Bus.router";
import { TicketRouter } from "../modules/Ticket/Ticket.router";

const router = express.Router();

router.use("/auth", AuthRouter);
router.use("/", BusRouter);
router.use("/", TicketRouter);

export default router