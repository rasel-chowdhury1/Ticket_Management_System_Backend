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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketServices = void 0;
const mongoose_1 = require("mongoose");
const Ticket_model_1 = require("./Ticket.model");
const createTicketIntoDb = (ticketData) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log({ ticketData });
    // Check if a ticket with the same bus, seat, and dateSlot already exists
    const existingTicket = yield Ticket_model_1.TicketModel.findOne({
        $and: [
            { bus: ticketData.bus },
            { seat: ticketData.seat },
            { dateSlot: ticketData.dateSlot },
        ],
    });
    // console.log({existingTicket}) 
    if (existingTicket) {
        throw new Error('Ticket with the same bus, seat, and dateSlot already exists');
    }
    // If no existing ticket, proceed to create the new ticket
    const result = yield Ticket_model_1.TicketModel.create(ticketData);
    return result;
});
const getSingleTicketFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Ticket_model_1.TicketModel.findById(id).populate("bus user");
    return result;
});
const getAllTicketsFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const { busName, seat, date } = query;
    let result;
    // Build the query conditions
    let queryConditions = {};
    if (seat) {
        queryConditions.seat = seat;
    }
    if (date) {
        queryConditions.dateSlot = date;
    }
    if (busName) {
        result = yield Ticket_model_1.TicketModel.find(queryConditions)
            .populate({
            path: "bus",
            match: { name: { $regex: busName, $options: "i" } }, // Filter buses by the name
        })
            .populate("user"); // Populate user details
        // Filter out tickets where `bus` is null (if no bus matches the name)
        result = result.filter((ticket) => ticket.bus !== null);
    }
    else {
        result = yield Ticket_model_1.TicketModel.find(Object.assign(Object.assign({}, queryConditions), { isDeleted: false, isSold: false })).populate("bus user");
    }
    return result;
});
const updateTicketIntoDB = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Ticket_model_1.TicketModel.findByIdAndUpdate(id, updateData, { new: true }).populate("bus user");
    return result;
});
const deleteTicketIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Ticket_model_1.TicketModel.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
    return result;
});
const getAvailableTicketsFromDB = (busId) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { isDeleted: false, isSold: false };
    if (busId)
        query.bus = busId;
    const result = yield Ticket_model_1.TicketModel.find(query).populate("bus user");
    return result;
});
const purchaseTicketFromDB = (ticketId, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const ticket = yield Ticket_model_1.TicketModel.findOne({ _id: ticketId, isDeleted: false, isSold: false });
    if (!ticket) {
        throw new Error("Ticket is not available for purchase");
    }
    ticket.isSold = true;
    ticket.user = new mongoose_1.Types.ObjectId(userId);
    ;
    const result = yield ticket.save();
    return result;
});
exports.TicketServices = {
    createTicketIntoDb,
    getSingleTicketFromDB,
    getAllTicketsFromDB,
    updateTicketIntoDB,
    deleteTicketIntoDB,
    getAvailableTicketsFromDB,
    purchaseTicketFromDB,
};
