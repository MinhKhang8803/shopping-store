// checkoutReducer.js
import * as actionTypes from "../actions/actionTypes";

const initialState = {
  cart: [],
  loading: false,
  // Add more state properties as needed
};

const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHECKOUT_REQUEST:
      // Handle checkout request
      break;
    case actionTypes.CHECKOUT_SUCCESS:
      // Handle checkout success

      // Handle other actions as needed
      break;
    default:
      return state;
  }
};

export default checkoutReducer;
