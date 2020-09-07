import CartActionTypes from "./cart.types";
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
  setCartItems,
} from "./cart.utils";

const INITIAL_STATE = {
  cartItems: [],
  isCartEmpty: true,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_CART_ITEM_SUCCESS:
      return {
        ...state,
        cartItems: addItemToCart(
          state.cartItems,
          action.payload.item,
          action.payload.userId
        ),
      };
    case CartActionTypes.REMOVE_CART_ITEM_SUCCESS:
      return {
        ...state,
        cartItems: removeItemFromCart(
          state.cartItems,
          action.payload.item,
          action.payload.userId
        ),
      };
    case CartActionTypes.CLEAR_CART_ITEM_SUCCESS:
      return {
        ...state,
        cartItems: clearItemFromCart(
          state.cartItems,
          action.payload.item,
          action.payload.userId
        ),
      };
    case CartActionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        cartItems: setCartItems(action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
