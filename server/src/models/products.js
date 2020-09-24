import mongoose, { Schema } from "mongoose";

const productsSchema = new Schema(
  {
    productId: {
      type: String,
      unique: true,
    },
    name: {
      type: String,
      trim: true,
      unique: false,
    },
    price: {
      type: Number,
      trim: true,
      unique: false,
    },
    stock: {
      type: Number,
      trim: true,
      unique: false,
    },
  },
  {
    timestamps: true,
  }
);

productsSchema.methods = {
  view() {
    const view = {
      id: this.id,
      productId: this.productId,
      name: this.name,
      price: this.price,
      stock: this.stock,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };

    return view;
  },
};

const model = mongoose.model("Products", productsSchema);

export const schema = model.schema;
export default model;
