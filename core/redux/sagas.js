import { call, put, takeLatest } from 'redux-saga/effects';
import {
  PROFILE_CURRENT_PROFILE,
  PROFILE_CURRENT_PROFILE_SUCCESS,
  PROFILE_CURRENT_PROFILE_FAIL
} from './actions';

function* fetchUser(action) {
  try {
    const url = '';
    const options = {
      method: 'GET',
      body: JSON.stringify(action.payload)
    };

    let value;

    yield put(
      getAction(PROFILE_CURRENT_PROFILE_SUCCESS, {
        first: 'Sihle Mabaleka',
        email: 'mabalekasihle@gmail.com',
        phone: '+27814726782'
      })
    );
  } catch (e) {
    yield put(getAction(PROFILE_CURRENT_PROFILE_FAIL, e.message));
  }
}

function* saga() {
  yield takeLatest(PROFILE_CURRENT_PROFILE, fetchUser);
}

function getAction(type, payload) {
  return {
    type,
    payload
  };
}

export default saga;
