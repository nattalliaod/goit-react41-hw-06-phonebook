// Selectors
import { createSelector } from "reselect";
export const getContactItem = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const getVisibleContacts = createSelector(
  [getContactItem, getFilter],
  (items, filter) => {
    const normalizeFilter = filter.toLowerCase();
    return items.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter),
    );
  },
);

export const getCountContacts = (state) => {
  return getContactItem(state)?.length ?? 0;
};