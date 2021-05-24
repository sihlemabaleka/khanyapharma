import {
  CART_ADD_PRODUCT,
  CART_ADD_PRODUCT_FAIL,
  CART_ADD_PRODUCT_SUCCESS,
  CART_GET,
  CART_GET_FAIL,
  CART_GET_SUCCESS,
  CART_REMOVE_PRODUCT,
  CART_REMOVE_PRODUCT_FAIL,
  CART_REMOVE_PRODUCT_SUCCESS,
  CART_UPDATE_PRODUCT,
  CART_UPDATE_PRODUCT_FAIL,
  CART_UPDATE_PRODUCT_SUCCESS
} from './../actions';

// Define your state here
const initialState = {
  cart: {}
};

// This export default will control your state for your application
export default (state = initialState, { type, payload }) => {
  switch (type) {
    // Auth
    case CART_ADD_PRODUCT:
      return {
        ...state,
        loading: true
      };
    case CART_ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        cart: {
          ...payload
        }
      };
    case CART_ADD_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        cart: {
          error: { ...payload }
        }
      };
    case CART_GET:
      return {
        ...state,
        loading: true
      };
    case CART_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        cart: {
          ...payload
        }
      };
    case CART_GET_FAIL:
      return {
        ...state,
        loading: false,
        cart: {
          error: { ...payload }
        }
      };
    case CART_REMOVE_PRODUCT:
      return {
        ...state,
        loading: true
      };
    case CART_REMOVE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        cart: {
          ...payload
        }
      };
    case CART_REMOVE_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        cart: {
          error: { ...payload }
        }
      };
    case CART_UPDATE_PRODUCT:
      return {
        ...state,
        loading: true
      };
    case CART_UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        cart: {
          ...payload
        }
      };
    case CART_UPDATE_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        cart: {
          error: { ...payload }
        }
      };
    default:
      return state;
  }
};
