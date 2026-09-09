import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
  state: {
    enum: ["complete", "pending", "missed"],
  },
  date: Date,
  branch: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "branch",
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "client",
  },
  radiologies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "radiology",
    },
  ],
  fromPartner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "partner",
  },
});

const Reservations = mongoose.model("reservation", reservationSchema);

export default Reservations;
