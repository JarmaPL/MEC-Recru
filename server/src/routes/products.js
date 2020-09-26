import { Router } from "express";
import { hotDeals, index, show } from "../controlers/products";

const router = new Router();

/**
 * @mecapi {get} of /products
 * @mecapiName Products::AllOfType
 * @mecapiModel /models/products
 * @mecapiControler /controlers/products
 * @mecapiSucces -> 200 OK - Safe and sound 🎧 as {Object}
 * @mecapiError -> Error as Text
 */
router.get("/", index);

/**
 * @mecapi {get} of /product/hot-deals
 * @mecapiName Hot-delas (TOP SELLING ITEMS)
 * @mecapiModel {count (of saling), product}
 * @mecapiControler /controlers/product
 * @mecapiSucces -> 200 OK - Safe and sound 🎧 as {Object}
 * @mecapiError -> 400 bad Request
 */
router.get("/hot-deals", hotDeals);

/**
 * @mecapi {get} of /products/:id
 * @mecapiName Products::FindOne
 * @mecapiModel /models/products
 * @mecapiControler /controlers/products
 * @mecapiSucces -> 200 OK - Safe and sound 🎧 as {Object}
 * @mecapiError -> just 404 NOT FOUND as {Object}
 */
router.get("/:id", show);

export default router;
