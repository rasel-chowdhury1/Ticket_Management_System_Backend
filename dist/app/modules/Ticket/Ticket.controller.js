"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const Ticket_service_1 = require("./Ticket.service");
const createTicket = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(req.body)
    const result = yield Ticket_service_1.TicketServices.createTicketIntoDb(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Ticket created successfully",
        data: result,
    });
}));
const getAllTickets = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Ticket_service_1.TicketServices.getAllTicketsFromDB(req.query);
    if (result.length > 0) {
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Tickets retrieved successfully",
            data: result,
        });
    }
    else {
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.NOT_FOUND,
            success: false,
            message: "No tickets found",
            data: result,
        });
    }
}));
const getSingleTicket = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield Ticket_service_1.TicketServices.getSingleTicketFromDB(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Ticket retrieved successfully",
        data: result,
    });
}));
const updateTicket = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield Ticket_service_1.TicketServices.updateTicketIntoDB(id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Ticket updated successfully",
        data: result,
    });
}));
const deleteTicket = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield Ticket_service_1.TicketServices.deleteTicketIntoDB(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Ticket deleted successfully",
        data: result,
    });
}));
const getAvailableTickets = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { busId } = req.query; // Assume busId is optional
    const result = yield Ticket_service_1.TicketServices.getAvailableTicketsFromDB(busId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Available tickets retrieved successfully",
        data: result,
    });
}));
const purchaseTicket = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ticketId } = req.body;
    console.log({ ticketId });
    const userId = req.user.userId; // Assuming `req.user` contains the authenticated user
    console.log({ userId });
    const result = yield Ticket_service_1.TicketServices.purchaseTicketFromDB(ticketId, userId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Ticket purchased successfully",
        data: result,
    });
}));
exports.TicketController = {
    createTicket,
    getAllTickets,
    getSingleTicket,
    updateTicket,
    deleteTicket,
    getAvailableTickets,
    purchaseTicket,
};
