import {
  ORDERSONEVIEW_FAILURE,
  ORDERSONEVIEW_SUCCESS,
  ORDERS_FAILURE,
  ORDERS_SUCCESS,
} from "../actions/orders";
import {
  PRODUCTSONEVIEW_FAILURE,
  PRODUCTSONEVIEW_SUCCESS,
  PRODUCTS_SUCCESS,
} from "../actions/products";

const initialState = {
  productList: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTSONEVIEW_SUCCESS:
      return {
        ...state,
        productInfo: action.payload.data,
      };
    case PRODUCTS_SUCCESS:
      return {
        ...state,
        productList: action.payload.data,
      };
    case PRODUCTSONEVIEW_FAILURE:
      return {
        ...state,
        error: action.payload.data,
      };
    case ORDERSONEVIEW_FAILURE:
      return {
        ...state,
        error: action.payload.data,
      };
    case ORDERSONEVIEW_SUCCESS:
      return {
        ...state,
        orderInfo: action.payload.data,
      };
    case ORDERS_SUCCESS:
      return {
        ...state,
        order: action.payload.data,
      };
    case ORDERS_FAILURE:
      return {
        ...state,
        error: action.payload.data,
      };
    default:
      return state;
  }
};

export default rootReducer;
