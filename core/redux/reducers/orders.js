import { ORDERS_GET, ORDERS_GET_FAIL, ORDERS_GET_SUCCESS } from './../actions';

// Define your state here
const initialState = {
  orders: {}
};

// This export default will control your state for your application
export default (state = initialState, { type, payload }) => {
  switch (type) {
    // Auth
    case ORDERS_GET:
      return {
        ...state,
        loading: true
      };
    case ORDERS_GET_SUCCESS:
      return {
        ...state,
        loading: true,
        orders: {
          ...payload
        }
      };
    case ORDERS_GET_FAIL:
      return {
        ...state,
        loading: true,
        orders: {
          error: { ...payload }
        }
      };
    default:
      return state;
  }
};
