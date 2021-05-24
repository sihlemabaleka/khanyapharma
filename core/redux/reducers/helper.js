import { SET_LOADING } from './../actions';

// Define your state here
const initialState = {
  loading: false
};

// This export default will control your state for your application
export default (state = initialState, { type, payload }) => {
  switch (type) {
    // Set loading
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
