import * as actionTypes from "./actionTypes";

export const addToCart = (product, quantity) => ({
  type: actionTypes.ADD_TO_CART,
  payload: { product, quantity },
});

export const updateCartItem = (productId, quantity) => ({
  type: actionTypes.UPDATE_CART_ITEM,
  payload: { productId, quantity },
});

export const removeFromCart = (productId) => ({
  type: actionTypes.REMOVE_FROM_CART,
  payload: productId,
});
