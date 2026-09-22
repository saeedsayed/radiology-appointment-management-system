import mongoose from "mongoose";
import Branches from "../branches/branch.model.js";
import Radiologies from "../radiologies/radiology.model.js";
import Partners from "../partners/partners.model.js";

export const reservationStates = ["complete", "pending", "missed"] as const;

const reservationSchema = new mongoose.Schema(
  {
    state: {
      type: String,
      enum: reservationStates,
      default: "pending",
    },
    date: Date,
    notes: String,
    branch: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "branch",
      validate: {
        validator: async function (
          value: mongoose.Types.ObjectId,
        ): Promise<boolean> {
          const category = await Branches.findById(value);
          return !!category;
        },
        message: "branch does not exist",
      },
    },
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "client",
    },
    radiologies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "radiology",
        validate: {
          validator: async function (
            value: mongoose.Types.ObjectId,
          ): Promise<boolean> {
            const category = await Radiologies.findById(value);
            return !!category;
          },
          message: "Radiology does not exist",
        },
        _id: false,
      },
    ],
    fromPartner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "partner",
      validate: {
        validator: async function (
          value: mongoose.Types.ObjectId,
        ): Promise<boolean> {
          const category = await Partners.findById(value);
          return !!category;
        },
        message: "Partner does not exist",
      },
    },
  },
  { timestamps: true },
);

const Reservations = mongoose.model("reservation", reservationSchema);

export default Reservations;
