import { Schema, model } from "mongoose";
import { TBus } from "./Bus.interface";

const BusSchema = new  Schema<TBus>(
    {
      name: {
        type: String,
        required: true,
        trim: true,
      },
      route: {
        type: String,
        required: true,
      },
      capacity: {
        type: Number,
        required: true,
      },
      isDeleted: {
        type: Boolean,
        default: false
    }
    },
    {
      timestamps: true,
    }
  );


export const BusModel = model<TBus>("Bus", BusSchema);