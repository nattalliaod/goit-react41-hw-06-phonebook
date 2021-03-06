import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import logger from 'redux-logger';
import { contactsReducer } from './contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },

  middleware: [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
  ],
  
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);