import mongoose from "mongoose";
import Radiologies from "../radiologies/radiology.model.js";

const partnerSchema = new mongoose.Schema({
  name: String,
  clients: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "client",
    },
  ],
  profitShare: [
    {
      radiologyCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "radiology",
        validate: {
          validator: async function (
            value: mongoose.Types.ObjectId,
          ): Promise<boolean> {
            const category = await Radiologies.findById(value);
            return !!category;
          },
          message: "Radiology category does not exist",
        },
      },
      value: Number,
    },
  ],
});

const Partners = mongoose.model("partner", partnerSchema);

export default Partners;
