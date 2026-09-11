import mongoose from "mongoose";

const radiologySchema = new mongoose.Schema(
  {
    category: {
      type: String,
      require: true,
      unique: true,
    },
    radiologies: {
      type: [
        {
          name: {
            type: String,
            require: true,
          },
          price: {
            type: Number,
            require: true,
          },
        },
      ],
      require: false,
    },
  },
  { timestamps: true },
);

const Radiologies = mongoose.model("radiology", radiologySchema);

export default Radiologies;
