import axios from "axios";
import { store } from "../store";

export const PRODUCTS_REQUEST = "PRODUCTS_REQUEST";
export const PRODUCTS_SUCCESS = "PRODUCTS_SUCCESS";
export const PRODUCTS_FAILURE = "PRODUCTS_FAILURE";

export const PRODUCTSONEVIEW_REQUEST = "PRODUCTSONEVIEW_REQUEST";
export const PRODUCTSONEVIEW_SUCCESS = "PRODUCTSONEVIEW_SUCCESS";
export const PRODUCTSONEVIEW_FAILURE = "PRODUCTSONEVIEW_FAILURE";

const url = process.env.REACT_APP_SERVER_PATH;

export const getProducts = (q) => (dispatch) => {
  dispatch({ type: PRODUCTS_REQUEST });
  const limit = 100000;
  const usertoken = store.getState().data.token;
  return axios
    .get(`${url}/Grups`, {
      params: {
        q,
        limit,
      },
      headers: {
        Authorization: `Bearer ${usertoken}`,
        "cache-control": "no-cache",
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then((payload) => {
      dispatch({ type: PRODUCTS_SUCCESS, payload });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: PRODUCTS_FAILURE });
    });
};
export const getOneProduct = (id) => (dispatch) => {
  dispatch({ type: PRODUCTSONEVIEW_REQUEST });
  const usertoken = store.getState().data.token;
  return axios
    .get(`${url}/Grups/${id}`, {
      headers: {
        Authorization: `Bearer ${usertoken}`,
        "cache-control": "no-cache",
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then((payload) => {
      dispatch({ type: PRODUCTSONEVIEW_SUCCESS, payload });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: PRODUCTSONEVIEW_FAILURE });
    });
};
