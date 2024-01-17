import * as actionTypes from '../actions/actionTypes';

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const existingProductIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.productId
      );

      if (existingProductIndex !== -1) {
        const updatedCart = [...state.cartItems];
        updatedCart[existingProductIndex].quantity += 1;

        return {
          ...state,
          cartItems: updatedCart,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }

    case actionTypes.UPDATE_CART_ITEM:
      const updatedCart = state.cartItems.map((item) =>
        item.id === action.payload.productId
          ? { ...item, quantity: action.payload.quantity }
          : item
      );

      return {
        ...state,
        cartItems: updatedCart,
      };

    case actionTypes.REMOVE_FROM_CART:
      const filteredCart = state.cartItems.filter(
        (item) => item.id !== action.payload
      );

      return {
        ...state,
        cartItems: filteredCart,
      };
    default:
      return state;
  }
};

export default cartReducer;
