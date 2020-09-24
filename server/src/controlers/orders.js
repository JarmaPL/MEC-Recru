import Orders from "../models/orders";
import Products from "../models/products";
import { wss } from "../wssConfig";
import { success, notFound, badRequest } from "./response";

export const create = ({ bodymen: { body } }, res, next) => {
  Products.findOne({ productId: body.productId })
    .then(notFound(res))
    .then((item) => item.stock >= body.quality)
    .then(badRequest(res))
    .then(() =>
      Orders.create(body)
        .then(async (item) => {
          await wss.send(`
            {
              operation: "product.stock.decrease",
              correlationId: "${item._id}",
              payload: {
                productId: ${item.productId},
                stock: ${item.quality},
              },
            }
          `);
          return item.view();
        })
        .catch(next)
    )
    .then(success(res, 200))
    .catch(next);
};

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

export const show = ({ params }, res, next) =>
  Orders.findById(params.id)
    .then(notFound(res))
    .then((orders) => (orders ? orders.view() : null))
    .then(success(res))
    .catch(next);
