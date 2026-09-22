import mongoose from "mongoose";
import Radiologies from "../radiologies/radiology.model.js";
import Category from "../categories/category.model.js";

const partnerSchema = new mongoose.Schema(
  {
    name: String,
    clients: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "client",
      },
    ],
    profitShare: {
      type: [
        {
          category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "category",
            validate: {
              validator: async function (
                value: mongoose.Types.ObjectId,
              ): Promise<boolean> {
                const category = await Category.findById(value);
                return !!category;
              },
              message: "Category does not exist",
            },
          },
          value: Number,
          _id: false,
        },
      ],
      require: true,
    },
  },
  { timestamps: true },
);

const Partners = mongoose.model("partner", partnerSchema);

export default Partners;
