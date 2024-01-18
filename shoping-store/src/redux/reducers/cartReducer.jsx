import * as actionTypes from "../actions/actionTypes";

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const existingProductIndex = state.cartItems.findIndex(
        (item) => item.productId === action.payload.product.productId
      );

      if (existingProductIndex !== -1) {
        const updatedCart = [...state.cartItems];
        updatedCart[existingProductIndex].quantity += action.payload.quantity;

        return {
          ...state,
          cartItems: updatedCart,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload.product, quantity: action.payload.quantity }],
        };
      }

    case actionTypes.UPDATE_CART_ITEM:
      const updatedQuantityCart = state.cartItems.map((item) =>
        item.productId === action.payload.productId
          ? { ...item, quantity: action.payload.quantity }
          : item
      );

      return {
        ...state,
        cartItems: updatedQuantityCart,
      };

    case actionTypes.REMOVE_FROM_CART:
      const filteredCart = state.cartItems.filter(
        (item) => item.productId !== action.payload
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
