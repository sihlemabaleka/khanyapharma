import {
  AUTH_SIGN_UP,
  AUTH_SIGN_UP_SUCCESS,
  AUTH_SIGN_UP_FAIL,
  AUTH_SIGN_IN,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_IN_FAIL,
  AUTH_FORGOT_PASSWORD,
  AUTH_FORGOT_PASSWORD_SUCCESS,
  AUTH_FORGOT_PASSWORD_FAIL,
  AUTH_RESET_PASSWORD,
  AUTH_RESET_PASSWORD_SUCCESS,
  AUTH_RESET_PASSWORD_FAIL
} from './../actions';

// Define your state here
const initialState = {
  auth: {}
};

// This export default will control your state for your application
export default (state = initialState, { type, payload }) => {
  switch (type) {
    // Auth
    case AUTH_SIGN_UP:
      return {
        ...state,
        loading: true
      };
    case AUTH_SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
        auth: {
          ...payload
        }
      };
    case AUTH_SIGN_UP_FAIL:
      return {
        ...state,
        loading: false,
        auth: {
          error: { ...payload }
        }
      };

    case AUTH_SIGN_IN:
      return {
        ...state,
        loading: true
      };
    case AUTH_SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        auth: {
          ...payload
        }
      };
    case AUTH_SIGN_IN_FAIL:
      return {
        ...state,
        loading: false,
        auth: {
          error: { ...payload }
        }
      };
    case AUTH_FORGOT_PASSWORD:
      return {
        ...state,
        loading: true
      };
    case AUTH_FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        auth: {
          ...payload
        }
      };
    case AUTH_FORGOT_PASSWORD_FAIL:
      return {
        ...state,
        loading: false,
        auth: {
          error: { ...payload }
        }
      };
    case AUTH_RESET_PASSWORD:
      return {
        ...state,
        loading: true
      };
    case AUTH_RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        auth: {
          ...payload
        }
      };
    case AUTH_RESET_PASSWORD_FAIL:
      return {
        ...state,
        loading: false,
        auth: {
          error: { ...payload }
        }
      };
    default:
      return state;
  }
};
