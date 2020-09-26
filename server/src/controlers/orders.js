import Orders from "../models/orders";
import Products from "../models/products";
import { wss } from "../wssConfig";
import { success, notFound, badRequest } from "./response";

//create new order if existing famillier product !
export const create = ({ bodymen: { body } }, res, next) => {
  Products.findOne({ productId: body.productId })
    .then(notFound(res))
    .then((item) => item.stock >= body.quality)
    .then(badRequest(res))
    .then(() =>
      Orders.create(body)
        .then((item) => {
          wss.send(
            JSON.stringify({
              operation: "product.stock.decrease",
              payload: {
                productId: Number(item.productId),
                stock: Number(item.quality),
              },
              correlationId: item._id,
            })
          );
          return item.view();
        })
        .then(badRequest(res))
        .catch(next)
    )
    .then(success(res, 200))
    .catch(next);
};

//get all elements (Just for testing and Administrating)
export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Orders.count(query)
    .then((count) =>
      Orders.find(query, select, cursor).then((orders) => ({
        count,
        orders: orders.map((orders) => orders.view()),
      }))
    )
    .then(success(res))
    .catch(next);

//Get order data by Id
export const show = ({ params }, res, next) =>
  Orders.findById(params.id)
    .then(notFound(res))
    .then((orders) => (orders ? orders.view() : null))
    .then(success(res))
    .catch(next);
