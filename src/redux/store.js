// import { combineReducers } from 'redux';
import contactsReducer from './contacts/slice';
import { configureStore } from '@reduxjs/toolkit';
// import { contactsApi } from 'api/fetch';
// import { setupListeners } from '@reduxjs/toolkit/query'
// import { fetchContactsThunk } from './thunk';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { authReducer } from './auth/slice';

const persistConfig = {
  key: 'auth',
  storage,
  // whitelist: ['token'],
};

// const rootReducer = combineReducers({
//   contactsBook: contactsReducer,
//   auth: persistReducer(persistConfig, authReducer),
  // [contactsApi.reducerPath]: contactsApi.reducer,
// });
// const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {auth: persistReducer(persistConfig, authReducer),
    contactsBook: contactsReducer
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(contactsApi.middleware),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
// setupListeners(store.dispatch)
export const persistor = persistStore(store);
