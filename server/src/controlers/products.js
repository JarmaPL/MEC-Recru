import { success, notFound, badRequest } from "./response";
import Products from "../models/products";
import Orders from "../models/orders";

//Get all products
export const index = (query, res, next) =>
  Products.find()
    .then((products) => ({
      products: products.map((products) => products.view()),
    }))
    .then(success(res))
    .catch(next);

//get product data by id
export const show = ({ params }, res, next) =>
  Products.findById(params.id)
    .then(notFound(res))
    .then((products) => products.view())
    .then(success(res))
    .catch(next);

//Additional task "Hot Deals" / Just fetch data from 2 collections and filter them
export const hotDeals = (query, res, next) =>
  Products.find()
    .then((products) =>
      Orders.find().then((orders) => {
        const Data = [];
        products.map((product) => {
          let counter = 0;
          orders.map((order) => {
            if (Number(product.productId) === order.productId)
              counter = counter + 1;
          });
          Data.push({
            count: counter,
            product: product.view(),
          });
        });
        let max = 0;
        Data.map((items) => {
          if (items.count > max) max = items.count;
        });
        Data.sort((a, b) => b.count - a.count);
        Data.splice(3, Data.length);
        return Data;
      })
    )
    .then(badRequest(res))
    .then(success(res))
    .catch(next);
