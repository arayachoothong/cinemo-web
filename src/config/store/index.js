import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../../sections/user/stores';
import favoriteReducer from '../../sections/favorite/stores';

export const store = configureStore({
  reducer: {
    user: userReducer,
    favorite: favoriteReducer,
  },
});
