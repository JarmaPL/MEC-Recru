import {
  ORDERSONEVIEW_FAILURE,
  ORDERSONEVIEW_SUCCESS,
  ORDERSCREATE_FAILURE,
  ORDERSCREATE_SUCCESS,
} from "../actions/orders";
import {
  HOTDEALS_FAILURE,
  HOTDEALS_SUCCESS,
  PRODUCTSONEVIEW_FAILURE,
  PRODUCTSONEVIEW_SUCCESS,
  PRODUCTS_SUCCESS,
} from "../actions/products";

const rootReducer = (state, action) => {
  switch (action.type) {
    case PRODUCTSONEVIEW_SUCCESS:
      return {
        ...state,
        productInfo: action.payload.data,
      };
    case PRODUCTS_SUCCESS:
      return {
        ...state,
        productList: action.payload.data.products,
      };
    case PRODUCTSONEVIEW_FAILURE:
      return {
        ...state,
        error: action.err.message,
      };
    case ORDERSONEVIEW_FAILURE:
      return {
        ...state,
        error: action.err.message,
      };
    case ORDERSONEVIEW_SUCCESS:
      return {
        ...state,
        orderInfo: action.payload.data,
      };
    case ORDERSCREATE_SUCCESS:
      return {
        ...state,
        order: action.payload.data,
        status: action.payload.status,
      };
    case ORDERSCREATE_FAILURE:
      return {
        ...state,
        error: action.err.message,
      };
    case HOTDEALS_SUCCESS:
      return {
        ...state,
        hotdeals: action.payload.data,
      };
    case HOTDEALS_FAILURE:
      return {
        ...state,
        error: action.err.message,
      };
    case "CLEAR_STATUTS":
      return {
        productInfo: state.productInfo ? state.productInfo : undefined,
      };
    default:
      return state;
  }
};

export default rootReducer;
