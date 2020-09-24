import { Router } from "express";
import { middleware as query } from "querymen";
import { index, show } from "../controlers/products";

const router = new Router();

/**
 * @mecapi {get} of /orders
 * @mecapiName Orders::AllOfType
 * @mecapiModel /models/orders
 * @mecapiControler /controlers/orders
 * @mecapiBody you can use querymen to filter getted data 😱
 * @mecapiSucces -> 200 OK - Safe and sound 🎧 as {Object}
 * @mecapiError -> just 400 Bad Request as {Object}
 */
router.get("/", query({ limit: 12 }), index);

/**
 * @mecapi {get} of /orders/:id
 * @mecapiName Orders::FindOf
 * @mecapiModel /models/orders
 * @mecapiControler /controlers/orders
 * @mecapiSucces -> 200 OK - Safe and sound 🎧 as {Object}
 * @mecapiError -> just 404 NOT FOUND as {Object}
 */
router.get("/:id", show);

export default router;
