import mongoose from "mongoose";

const radiologySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
    },
  },
  { timestamps: true },
);

const Radiologies = mongoose.model("radiology", radiologySchema);

export default Radiologies;
