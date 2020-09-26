import axios from "axios";

export const PRODUCTS_REQUEST = "PRODUCTS_REQUEST";
export const PRODUCTS_SUCCESS = "PRODUCTS_SUCCESS";
export const PRODUCTS_FAILURE = "PRODUCTS_FAILURE";

export const PRODUCTSONEVIEW_REQUEST = "PRODUCTSONEVIEW_REQUEST";
export const PRODUCTSONEVIEW_SUCCESS = "PRODUCTSONEVIEW_SUCCESS";
export const PRODUCTSONEVIEW_FAILURE = "PRODUCTSONEVIEW_FAILURE";

export const HOTDEALS_REQUEST = "HOTDEALS_REQUEST";
export const HOTDEALS_SUCCESS = "HOTDEALS_SUCCESS";
export const HOTDEALS_FAILURE = "HOTDEALS_FAILURE";

const url = process.env.REACT_APP_SERVER_PATH;

export const getProducts = () => (dispatch) => {
  dispatch({ type: PRODUCTS_REQUEST });
  return axios
    .get(`${url}/products`, {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then((payload) => {
      dispatch({ type: PRODUCTS_SUCCESS, payload });
    })
    .catch((err) => {
      dispatch({ type: PRODUCTS_FAILURE, err });
    });
};
export const getOneProduct = (id) => (dispatch) => {
  dispatch({ type: PRODUCTSONEVIEW_REQUEST });
  return axios
    .get(`${url}/products${id}`, {
      headers: {
        "cache-control": "no-cache",
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then((payload) => {
      dispatch({ type: PRODUCTSONEVIEW_SUCCESS, payload });
    })
    .catch((err) => {
      dispatch({ type: PRODUCTSONEVIEW_FAILURE, err });
    });
};
export const getHotDeals = () => (dispatch) => {
  dispatch({ type: HOTDEALS_REQUEST });
  return axios
    .get(`${url}/products/hot-deals`, {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then((payload) => {
      dispatch({ type: HOTDEALS_SUCCESS, payload });
    })
    .catch((err) => {
      dispatch({ type: HOTDEALS_FAILURE, err });
    });
};
