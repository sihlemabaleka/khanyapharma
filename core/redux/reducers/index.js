// combineReducers come from redux that used for combining reducers that we just made.
import { combineReducers } from 'redux';

// Reducers
import auth from './auth';
import helper from './helper';
import products from './products';
import profile from './profile';
import orders from './orders';
import cart from './cart';

export default combineReducers({
  helper,
  auth,
  products,
  profile,
  orders,
  cart
});
