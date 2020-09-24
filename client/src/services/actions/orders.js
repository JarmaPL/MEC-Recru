import axios from "axios";
import { store } from "../store";

export const ORDERS_REQUEST = "ORDERS_REQUEST";
export const ORDERS_SUCCESS = "ORDERS_SUCCESS";
export const ORDERS_FAILURE = "ORDERS_FAILURE";

export const ORDERSONEVIEW_REQUEST = "ORDERSONEVIEW_REQUEST";
export const ORDERSONEVIEW_SUCCESS = "ORDERSONEVIEW_SUCCESS";
export const ORDERSONEVIEW_FAILURE = "ORDERSONEVIEW_FAILURE";

const url = process.env.REACT_APP_SERVER_PATH;

export const postOrder = (q) => (dispatch) => {
  dispatch({ type: ORDERS_REQUEST });
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
      dispatch({ type: ORDERS_SUCCESS, payload });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ORDERS_FAILURE });
    });
};
export const getOneOrder = (id) => (dispatch) => {
  dispatch({ type: ORDERSONEVIEW_REQUEST });
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
      dispatch({ type: ORDERSONEVIEW_SUCCESS, payload });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ORDERSONEVIEW_FAILURE });
    });
};
