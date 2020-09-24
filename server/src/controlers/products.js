import { success, notFound } from "./response";
import Products from "../models/products";

export const create = ({ body }, res, next) =>
  Products.create(body).then(success(res, 200)).catch(next);

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Products.count(query)
    .then(() =>
      Products.find(query, select, cursor).then((products) => ({
        products: products.map((products) => products.view()),
      }))
    )
    .then(success(res))
    .catch(next);

export const show = ({ params }, res, next) =>
  Products.findById(params.id)
    .then(notFound(res))
    .then((products) => products.view())
    .then(success(res))
    .catch(next);
