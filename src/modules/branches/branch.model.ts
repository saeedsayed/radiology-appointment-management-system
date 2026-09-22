import mongoose from "mongoose";
import Reservations from "../reservations/reservation.model.js";
import Category from "../categories/category.model.js";

const branchSchema = new mongoose.Schema(
  {
    name: { type: String, require: true, unique: true },
    address: { type: String, require: true },
    availableRadiology: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category",
        validate: {
          validator: async function (
            value: mongoose.Types.ObjectId,
          ): Promise<boolean> {
            const category = await Category.findById(value);
            return !!category;
          },
          message: "Radiology category does not exist",
        },
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
