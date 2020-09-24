import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema(
  {
    productId: {
      type: Number,
      required: true,
    },
    quality: {
      type: Number,
      trim: true,
      required: true,
      unique: false,
    },
  },
  {
    timestamps: true,
  }
);

orderSchema.methods = {
  view() {
    const view = {
      id: this.id,
      productId: this.productId,
      quality: this.quality,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };

    return view;
  },
};

const model = mongoose.model("Orders", orderSchema);

export const schema = model.schema;
export default model;
