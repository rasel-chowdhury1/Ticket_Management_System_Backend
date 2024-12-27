import { Schema, model } from "mongoose";
import { TTicket } from "./Ticket.type";

const TicketSchema = new Schema<TTicket>(
  {
    bus: {
      type: Schema.Types.ObjectId,
      ref: "Bus",
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    seat: {
      type: String, 
      required: true, 
    },
    dateSlot: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    isSold: {
      type: Boolean,
      default: false,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const TicketModel = model<TTicket>("Ticket", TicketSchema);
