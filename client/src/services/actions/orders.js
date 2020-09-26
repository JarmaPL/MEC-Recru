import axios from "axios";

export const ORDERSCREATE_REQUEST = "ORDERSCREATE_REQUEST";
export const ORDERSCREATE_SUCCESS = "ORDERSCREATE_SUCCESS";
export const ORDERSCREATE_FAILURE = "ORDERSCREATE_FAILURE";

export const ORDERSONEVIEW_REQUEST = "ORDERSONEVIEW_REQUEST";
export const ORDERSONEVIEW_SUCCESS = "ORDERSONEVIEW_SUCCESS";
export const ORDERSONEVIEW_FAILURE = "ORDERSONEVIEW_FAILURE";

const url = process.env.REACT_APP_SERVER_PATH;

export const getOneOrder = (id) => (dispatch) => {
  dispatch({ type: ORDERSONEVIEW_REQUEST });
  return axios
    .get(`${url}/orders/${id}`)
    .then((payload) => {
      dispatch({ type: ORDERSONEVIEW_SUCCESS, payload });
    })
    .catch((err) => {
      dispatch({ type: ORDERSONEVIEW_FAILURE, err });
    });
};

export const postOrder = (productId, quality) => (dispatch) => {
  dispatch({ type: ORDERSCREATE_REQUEST });
  const body = {
    productId: Number(productId),
    quality: Number(quality),
  };
  return axios
    .post(`${url}/orders`, body)
    .then((payload) => {
      console.log(payload);

      dispatch({ type: ORDERSCREATE_SUCCESS, payload });
    })
    .catch((err) => {
      dispatch({ type: ORDERSCREATE_FAILURE, err });
    });
};

export const cleanStatuts = () => (dispatch) => {
  dispatch({ type: "CLEAR_STATUTS" });
};
