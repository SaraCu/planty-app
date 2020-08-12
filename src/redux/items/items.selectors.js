import { createSelector } from "reselect";

const selectItems = (state) => state.items;

export const selectItemsCollection = createSelector(
  [selectItems],
  (items) => items.itemsCollection
);
