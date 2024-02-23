import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
  },
  reducers: {
    addUser: (state, action) => {
      state.users = [...state.users, action.payload];
    },

    deleteUser: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
  },
});

const persistConfig = {
  key: 'user',
  storage,
};

export const { addUser, deleteUser } = usersSlice.actions;
export const userReducer = persistReducer(persistConfig, usersSlice.reducer);

// export const addUser = createAction('users/add');
// export const deleteUser = createAction('users/delete');

// export const usersReducer = createReducer(initialState, builder =>
//   builder
//     .addCase(addUser, (state, action) => {
//       return {
//         users: [...state.users, action.payload],
//       };
//     })
//     .addCase(deleteUser, (state, action) => {
//       return {
//         users: state.users.filter(user => user.id !== action.payload),
//       };
//     })
// );

// export const addUser = value => {
//   return {
//     type: 'users/add',
//     payload: value,
//   };
// };

// export const deleteUser = id => {
//   return {
//     type: 'users/delete',
//     payload: id,
//   };
// };

// export const usersReducer = (state = usersInitialState, action) => {
//   switch (action.type) {
//     case 'users/add':
//       return {
//         ...state,
//         users: [...state.users, action.payload],
//       };
//     case 'users/delete':
//       return {
//         ...state,
//         users: state.users.filter(user => user.id !== action.payload),
//       };
//     default:
//       return state;
//   }
// };
