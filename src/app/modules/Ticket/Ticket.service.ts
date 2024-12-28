
import { Types } from "mongoose";
import { TTicket } from "./Ticket.type";
import { TicketModel } from "./Ticket.model";

const createTicketIntoDb = async (ticketData: TTicket) => {
  // console.log({ ticketData });

  // Check if a ticket with the same bus, seat, and dateSlot already exists
  const existingTicket = await TicketModel.findOne({
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
  const result = await TicketModel.create(ticketData);
  return result;
};

const getSingleTicketFromDB = async (id: string) => {
  const result = await TicketModel.findById(id).populate("bus user");
  return result;
};

const getAllTicketsFromDB = async (query: Record<string, unknown>) => {
      const { busName, seat, date } = query;

      let result;

      // Build the query conditions
      let queryConditions: Record<string, unknown> = {};

      if (seat) {
        queryConditions.seat = seat;
      }

      if (date) {
        queryConditions.dateSlot = date;
      }

      if (busName) {
        result = await TicketModel.find(queryConditions)
          .populate({
            path: "bus",
            match: { name: { $regex: busName, $options: "i" } }, // Filter buses by the name
          })
          .populate("user"); // Populate user details

        // Filter out tickets where `bus` is null (if no bus matches the name)
        result = result.filter((ticket) => ticket.bus !== null);
      } else {
        result = await TicketModel.find({
          ...queryConditions,
          isDeleted: false,
          isSold: false,
        }).populate("bus user");
      }

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
