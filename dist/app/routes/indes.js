"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Auth_router_1 = require("../modules/Auth/Auth.router");
const Bus_router_1 = require("../modules/Bus/Bus.router");
const Ticket_router_1 = require("../modules/Ticket/Ticket.router");
const router = express_1.default.Router();
router.use("/auth", Auth_router_1.AuthRouter);
router.use("/", Bus_router_1.BusRouter);
router.use("/", Ticket_router_1.TicketRouter);
exports.default = router;
