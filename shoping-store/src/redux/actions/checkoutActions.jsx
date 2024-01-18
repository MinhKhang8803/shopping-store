// checkoutActions.js
import * as actionTypes from "./actionTypes";

export const checkoutRequest = cart => ({
  type: actionTypes.CHECKOUT_REQUEST,
  payload: cart,
});

export const checkoutSuccess = () => ({
  type: actionTypes.CHECKOUT_SUCCESS,
});
