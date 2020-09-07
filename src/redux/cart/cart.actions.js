import CartActionTypes from "./cart.types";
import {
  getCartItems,
  addToCartAsync,
  removeFromCartAsync,
  clearFromCartAsync,
} from "./cart.data";

export const addToCart = (item, userId, cartItems) => {
  return (dispatch) => {
    dispatch({ type: CartActionTypes.ADD_CART_ITEM_START });
    addToCartAsync(userId, item, cartItems).then(
      (response) => {
        dispatch({
          type: CartActionTypes.ADD_CART_ITEM_SUCCESS,
          payload: { item, userId },
        });
      },
      (error) => {
        dispatch({ type: CartActionTypes.ADD_CART_ITEM_FAILURE });
      }
    );
  };
};

export const removeFromCart = (item, userId, cartItems) => {
  return (dispatch) => {
    dispatch({ type: CartActionTypes.REMOVE_CART_ITEM_START });
    removeFromCartAsync(userId, item, cartItems).then(
      (response) => {
        dispatch({
          type: CartActionTypes.REMOVE_CART_ITEM_SUCCESS,
          payload: { item, userId },
        });
      },
      (error) => {
        dispatch({ type: CartActionTypes.REMOVE_CART_ITEM_FAILURE });
      }
    );
  };
};

export const clearItemFromCart = (item, userId) => {
  return (dispatch) => {
    dispatch({ type: CartActionTypes.CLEAR_CART_ITEM_START });
    clearFromCartAsync(userId, item).then(
      (response) => {
        dispatch({
          type: CartActionTypes.CLEAR_CART_ITEM_SUCCESS,
          payload: { item, userId },
        });
      },
      (error) => {
        dispatch({ type: CartActionTypes.CLEAR_CART_ITEM_FAILURE });
      }
    );
  };
};

export const fetchCartItems = (userId) => {
  return (dispatch) => {
    dispatch({ type: CartActionTypes.FETCH_DATA_START });
    getCartItems(userId).then(
      (response) => {
        dispatch({
          type: CartActionTypes.FETCH_DATA_SUCCESS,
          payload: response,
        });
      },
      (error) => {
        dispatch({ type: CartActionTypes.FETCH_DATA_FALIURE, error });
      }
    );
  };
};
