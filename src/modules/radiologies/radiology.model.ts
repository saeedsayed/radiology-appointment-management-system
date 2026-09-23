import mongoose from "mongoose";
import Branches from "../branches/branch.model.js";

const radiologySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    prices: {
      type: [
        {
          branch: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "branch",
            required: true,
            validate: {
              validator: async function (
                value: mongoose.Types.ObjectId,
              ): Promise<boolean> {
                const branch = await Branches.findById(value);
                return !!branch;
              },
              message: "Branch does not exist",
            },
          },
          price: { type: Number, required: true, min: 1 },
          _id: false,
        },
      ],
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
    },
  },
  { timestamps: true },
);

const Radiologies = mongoose.model("radiology", radiologySchema);

export default Radiologies;
