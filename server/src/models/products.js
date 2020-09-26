import mongoose, { Schema } from "mongoose";

const productsSchema = new Schema(
  {
    productId: {
      //Id from WebSocket
      type: String,
      unique: true,
    },
    name: {
      //Product Name also from WebSocket
      type: String,
      trim: true,
      unique: false,
    },
    price: {
      //price also from WebSocket
      type: Number,
      trim: true,
      unique: false,
    },
    stock: {
      // again stock value from WebSocket
      type: Number,
      trim: true,
      unique: false,
    },
  },
  {
    timestamps: true,
  }
);

//return values on view function => CreatedAt, updatedAt i write about it in /models/orders.js
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
