// productActions.js
import * as actionTypes from './actionTypes';

export const fetchProductsRequest = () => ({
    type: actionTypes.FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = (products) => ({
    type: actionTypes.FETCH_PRODUCTS_SUCCESS,
    payload: products,
});
