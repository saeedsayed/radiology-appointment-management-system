import mongoose from "mongoose";

const branchSchema = new mongoose.Schema(
  {
    name: { type: String, require: true, unique: true },
    address: { type: String, require: true },
    availableRadiology: [
      { type: mongoose.Schema.Types.ObjectId, ref: "radiology" },
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
      },
    ],
    reservations: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "reservation",
      },
    ],
  },
  { timestamps: true },
);

const Branches = mongoose.model("branch", branchSchema);

export default Branches;
