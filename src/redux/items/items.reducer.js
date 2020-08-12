import { ItemsActionTypes } from "./items.types";

const INITIAL_STATE = {
  status: "idle",
  img: "idle",
  itemsCollection: null,
  images: null,
};

const itemsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ItemsActionTypes.FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        status: "success",
        itemsCollection: action.payload,
      };
    default:
      return state;
  }
};

export default itemsReducer;
