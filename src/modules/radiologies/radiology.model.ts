import mongoose from "mongoose";

const radiologySchema = new mongoose.Schema({
  category: {
    type: String,
    require: true,
  },
  radiologies: [
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
});

const Radiologies = mongoose.model("radiology", radiologySchema);

export default Radiologies;
