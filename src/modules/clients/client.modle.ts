import mongoose from "mongoose";

const client = new mongoose.Schema({
  name: String,
  age: {
    type: Number,
    min: 0,
    max: 120,
  },
  phoneNumber: {
    type: Number,
  },
  reservations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "reservation",
    },
  ],
});

const Clients = mongoose.model("client", client);

export default Clients;
