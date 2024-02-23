// import { combineReducers } from 'redux';
import { nameReducer } from './nameSlice';
import { userReducer } from './usersSlice';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

export const store = configureStore({
  reducer: {
    users: userReducer,
    name: nameReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistedStore = persistStore(store);

//!----or
// const rootReducer = combineReducers({
//   users: usersReducer,
//   name: nameReducer,
// });
// export const store = configureStore({
//   reducer: rootReducer,
// });
