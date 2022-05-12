import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        filter: '',
    },
    reducers: {
        addContact(state, { payload }) {
           state.items = [...state.items,  payload]
        },

        deleteContact(state, { payload }) {
          state.items = state.items.filter(({id}) => id !== payload)
        },
        
        filterContact(state, action) {
         state.filter = action.payload
        },   
    },
});

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);

export const { addContact, deleteContact, filterContact } = contactsSlice.actions;

