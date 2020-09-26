import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema(
  {
    productId: {
      //Id of prodcut (From WebSocket)
      type: Number,
      required: true,
    },
    quality: {
      //quality of order
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

//return method giving Id, productId and Quality
//I made timestams in 17 line (UP!) and return method can giving us information about creating that record and when last time was editted
orderSchema.methods = {
  view() {
    const view = {
      id: this.id,
      productId: this.productId,
      quality: this.quality,
    };

    return view;
  },
};

const model = mongoose.model("Orders", orderSchema);

export const schema = model.schema;
export default model;
