import * as actionTypes from "../actions/actionTypes";

const initialState = {
  products: [],
  selectedProduct: null,
  loading: false,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS_REQUEST:
      return {...state, loading: true};

    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return {...state, loading: false, products: action.payload};

    default:
      return state;
  }
};

export default productReducer;
