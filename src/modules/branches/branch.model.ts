import mongoose from "mongoose";
import Reservations from "../reservations/reservation.model.js";
import Radiologies from "../radiologies/radiology.model.js";

const branchSchema = new mongoose.Schema(
  {
    name: { type: String, require: true, unique: true },
    address: { type: String, require: true },
    availableRadiology: [
      {
        radiology: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "radiology",
          required: true,
          validate: {
            validator: async function (
              value: mongoose.Types.ObjectId,
            ): Promise<boolean> {
              const radiology = await Radiologies.findById(value);
              return !!radiology;
            },
            message: "Radiology does not exist",
          },
        },
        price: { type: Number, required: true, min: 1 },
        salePrice: { type: Number, required: true, min: 1 },
        _id: false,
      },
    ],
    workSchedule: [
      {
        weekday: {
          type: Number,
          min: 0,
          max: 6,
        },
        openTime: { type: Number, min: 0, max: 1439 },
        closeTime: { type: Number, min: 0, max: 1439 },
        _id: false,
      },
    ],
    reservations: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "reservation",
        validate: {
          validator: async function (
            value: mongoose.Types.ObjectId,
          ): Promise<boolean> {
            const reservation = await Reservations.findById(value);
            return !!reservation;
          },
          message: "Radiology category does not exist",
        },
        _id: false,
      },
    ],
  },
  { timestamps: true },
);

const Branches = mongoose.model("branch", branchSchema);

export default Branches;
