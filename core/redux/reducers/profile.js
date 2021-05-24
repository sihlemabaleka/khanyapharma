import {
  PROFILE_GET_USER,
  PROFILE_GET_USER_SUCCESS,
  PROFILE_GET_USER_FAIL,
  PROFILE_CREATE_PROFILE,
  PROFILE_CREATE_PROFILE_SUCCESS,
  PROFILE_CREATE_PROFILE_FAIL,
  PROFILE_CURRENT_PROFILE,
  PROFILE_CURRENT_PROFILE_SUCCESS,
  PROFILE_CURRENT_PROFILE_FAIL,
  PROFILE_UPDATE,
  PROFILE_UPDATE_SUCCESS,
  PROFILE_UPDATE_FAIL,
  PROFILE_UPLOAD_PICTURE,
  PROFILE_UPLOAD_PICTURE_SUCCESS,
  PROFILE_UPLOAD_PICTURE_FAIL
} from './../actions';

// Define your state here
const initialState = {
  profile: {}
};

// This export default will control your state for your application
export default (state = initialState, { type, payload }) => {
  switch (type) {
    // Profile
    case PROFILE_CREATE_PROFILE:
      return {
        ...state,
        loading: true
      };
    case PROFILE_CREATE_PROFILE_SUCCESS:
      return {
        ...state,
        loading: true,
        profile: {
          ...payload
        }
      };
    case PROFILE_CREATE_PROFILE_FAIL:
      return {
        ...state,
        loading: true,
        profile: {
          error: { ...payload }
        }
      };
    case PROFILE_CURRENT_PROFILE:
      return {
        ...state,
        loading: true
      };
    case PROFILE_CURRENT_PROFILE_SUCCESS:
      return {
        ...state,
        loading: true,
        profile: {
          ...payload
        }
      };
    case PROFILE_CURRENT_PROFILE_FAIL:
      return {
        ...state,
        loading: true,
        profile: {
          error: { ...payload }
        }
      };
    case PROFILE_GET_USER:
      return {
        ...state,
        loading: true
      };
    case PROFILE_GET_USER_SUCCESS:
      return {
        ...state,
        loading: true,
        profile: {
          selectedUser: {
            ...payload
          }
        }
      };
    case PROFILE_GET_USER_FAIL:
      return {
        ...state,
        loading: true,
        profile: {
          selectedUser: {
            error: { ...payload }
          }
        }
      };
    case PROFILE_UPDATE:
      return {
        ...state,
        loading: true,
        profile: {
          ...payload
        }
      };
    case PROFILE_UPDATE_SUCCESS:
      return {
        ...state,
        loading: true,
        profile: {
          ...payload
        }
      };
    case PROFILE_UPDATE_FAIL:
      return {
        ...state,
        loading: true,
        profile: {
          error: { ...payload }
        }
      };
    case PROFILE_UPLOAD_PICTURE:
      return {
        ...state,
        loading: true
      };
    case PROFILE_UPLOAD_PICTURE_SUCCESS:
      return {
        ...state,
        loading: true,
        profile: {
          ...payload
        }
      };
    case PROFILE_UPLOAD_PICTURE_FAIL:
      return {
        ...state,
        loading: true,
        profile: {
          error: { ...payload }
        }
      };
    default:
      return state;
  }
};
