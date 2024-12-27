import { Types } from "mongoose";

export type TTicket = {
    bus: Types.ObjectId;
    user?: Types.ObjectId;
    seat: string;
    dateSlot: string;
    price: number;
    isSold: boolean;
    isDeleted?: boolean;
  }