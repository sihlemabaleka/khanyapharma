import {
  PRODUCTS_GET_ALL,
  PRODUCTS_GET_ALL_SUCCESS,
  PRODUCTS_GET_ALL_FAIL,
  PRODUCTS_GET_ONE,
  PRODUCTS_GET_ONE_SUCCESS,
  PRODUCTS_GET_ONE_FAIL,
  PRODUCTS_QUERY,
  PRODUCTS_QUERY_SUCCESS,
  PRODUCTS_QUERY_FAIL,
  PRODUCTS_UPDATE,
  PRODUCTS_UPDATE_SUCCESS,
  PRODUCTS_UPDATE_FAIL,
  SET_LOADING
} from './../actions';

// Define your state here
const initialState = {
  products: {}
};

// This export default will control your state for your application
export default (state = initialState, { type, payload }) => {
  switch (type) {
    // Products
    case PRODUCTS_GET_ALL:
      return {
        ...state,
        loading: true
      };
    case PRODUCTS_GET_ALL_SUCCESS:
      return {
        ...state,
        loading: false,
        products: {
          ...payload
        }
      };
    case PRODUCTS_GET_ALL_FAIL:
      return {
        ...state,
        loading: false,
        products: {
          error: { ...payload }
        }
      };
    case PRODUCTS_GET_ONE:
      return {
        ...state,
        loading: true
      };
    case PRODUCTS_GET_ONE_SUCCESS:
      return {
        ...state,
        loading: false,
        products: {
          product: {
            ...payload
          }
        }
      };
    case PRODUCTS_GET_ONE_FAIL:
      return {
        ...state,
        loading: true,
        products: {
          product: {
            error: { ...payload }
          }
        }
      };
    case PRODUCTS_QUERY:
      return {
        ...state,
        loading: true,
        product: {}
      };
    case PRODUCTS_QUERY_SUCCESS:
      return {
        ...state,
        loading: false,
        products: {
          ...payload
        }
      };
    case PRODUCTS_QUERY_FAIL:
      return {
        ...state,
        loading: false,
        products: {
          error: { ...payload }
        }
      };
    case PRODUCTS_UPDATE:
      return {
        ...state,
        loading: true
      };
    case PRODUCTS_UPDATE_SUCCESS:
      return {
        ...state,
        loading: true,
        products: {
          ...payload
        }
      };
    case PRODUCTS_UPDATE_FAIL:
      return {
        ...state,
        loading: true,
        products: {
          error: { ...payload }
        }
      };
    // Return default state if you didn't match any case
    default:
      return state;
  }
};
