import ProductsModel from "./models/products";
import WebSocket from "ws";

export const wss = new WebSocket("wss://mec-storage.herokuapp.com");
//open connect
wss.on("open", () => console.log("Connection start!"));

//This is controler of fatched data from WebSocket server
wss.onmessage = (event) => {
  const data = JSON.parse(event.data.replace(/(?<!\\)'/g, '"'));
  if (Array.isArray(data)) {
    data.map((item) => ProductsModel.create(item));
  } else {
    ProductsModel.findOne({ productId: data.payload.productId }).then((item) =>
      Object.assign(item, data.payload).save()
    );
  }
};
