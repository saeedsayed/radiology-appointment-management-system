import mongoose from "mongoose";

const partner = new mongoose.Schema({
  name: String,
  clients: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "client",
  },
  profitShare: [
    {
      radiologyCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "radiologyCategory",
      },
      value: Number,
    },
  ],
});

const Partners = mongoose.model("partner");

export default Partners;
