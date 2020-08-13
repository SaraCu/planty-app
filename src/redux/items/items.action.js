import { getData } from "./items.data";
import { ItemsActionTypes } from "./items.types";

export const fetchData = () => {
  return (dispatch) => {
    dispatch({ type: ItemsActionTypes.FETCH_ITEMS_START });
    getData().then(
      (response) => {
        dispatch({
          type: ItemsActionTypes.FETCH_ITEMS_SUCCESS,
          payload: response,
        });
      },
      (error) => {
        dispatch({ type: ItemsActionTypes.FETCH_ITEMS_FALIURE, error });
      }
    );
  };
};
