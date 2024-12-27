
import { Types } from "mongoose";
import { TTicket } from "./Ticket.type";
import { TicketModel } from "./Ticket.model";

const createTicketIntoDb = async (ticketData: TTicket) => {
  const result = await TicketModel.create(ticketData);
  return result;
};

const getSingleTicketFromDB = async (id: string) => {
  const result = await TicketModel.findById(id).populate("bus user");
  return result;
};

const getAllTicketsFromDB = async () => {
  const result = await TicketModel.find({ isDeleted: false, isSold: false }).populate("bus user");
  return result;
};

const updateTicketIntoDB = async (id: string, updateData: Partial<TTicket>) => {
  const result = await TicketModel.findByIdAndUpdate(id, updateData, { new: true }).populate("bus user");
  return result;
};

const deleteTicketIntoDB = async (id: string) => {
  const result = await TicketModel.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
  return result;
};

const getAvailableTicketsFromDB = async (busId?: string) => {
  const query: any = { isDeleted: false, isSold: false };
  if (busId) query.bus = busId;

  const result = await TicketModel.find(query).populate("bus user");
  return result;
};

const purchaseTicketFromDB = async (ticketId: string, userId: string) => {
  const ticket = await TicketModel.findOne({ _id: ticketId, isDeleted: false, isSold: false });

  if (!ticket) {
    throw new Error("Ticket is not available for purchase");
  }

  ticket.isSold = true;
  ticket.user = new Types.ObjectId(userId);;

  const result = await ticket.save();
  return result;
};

export const TicketServices = {
  createTicketIntoDb,
  getSingleTicketFromDB,
  getAllTicketsFromDB,
  updateTicketIntoDB,
  deleteTicketIntoDB,
  getAvailableTicketsFromDB,
  purchaseTicketFromDB,
};
