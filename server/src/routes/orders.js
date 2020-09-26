import { Router } from "express";
import { middleware as query } from "querymen";
import { middleware as body } from "bodymen";
import { create, index, show } from "../controlers/orders";
import { schema } from "../models/orders";

const router = new Router();
const { productId, quality } = schema.tree;

/**
 * @mecapi {post} of /orders
 * @mecapiName Orders:CreateNewOne
 * @mecapiModel /models/orders
 * @mecapiControler /controlers/orders
 * @mecapiBody must have [ProductId and Quality] in Object sample: {productID: "RandomThing", Quality: 12}
 * @mecapiSucces -> 200 OK - Safe and sound 🎧 as {Object}
 * @mecapiError -> 400 Bad Request as {Object} (count of qualiti ist too hight) 🙅
 * @mecapiError -> 404 NOT FOUND as {Object} (product not found)
 */
router.post("/", body({ productId, quality }), create);

/**
 * @mecapi {get} of /orders
 * @mecapiName Orders::AllOfType
 * @mecapiModel /models/orders
 * @mecapiControler /controlers/orders
 * @mecapiDescription its UseFull for Testing and Administrating (can be using when app will get biger)
 * @mecapiBody you can use querymen to filter getted data 😱
 * @mecapiSucces -> 200 OK - Safe and sound 🎧 as {Object}
 * @mecapiError -> just 400 Bad Request as {Object}
 */
router.get("/", query(), index);

/**
 * @mecapi {get} of /orders/:id
 * @mecapiName Orders::FindOne
 * @mecapiModel /models/orders
 * @mecapiControler /controlers/orders
 * @mecapiSucces -> 200 OK - Safe and sound 🎧 as {Object}
 * @mecapiError -> just 404 NOT FOUND as {Object}
 */
router.get("/:id", show);

export default router;
