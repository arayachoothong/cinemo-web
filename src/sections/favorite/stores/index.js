import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    setFavoriteToLocalStorage: (state) => {
      const favoriteIds = state.favorites.map((el) => el.id);
      localStorage.setItem('myFavorite', favoriteIds);
    },
    setFavorites: (state, action) => {
      state.favorites = action.payload;
      favoriteSlice.caseReducers.setFavoriteToLocalStorage(state);
    },
    addFavorites: (state, action) => {
      state.favorites.push(action.payload);
      favoriteSlice.caseReducers.setFavoriteToLocalStorage(state);
    },
    removeFavorites: (state, action) => {
      const index = state.favorites.findIndex((el) => el.id === action.payload.id);
      if (index > -1) state.favorites.splice(index, 1);
      favoriteSlice.caseReducers.setFavoriteToLocalStorage(state);
    },
  },
});

export const { addFavorites, removeFavorites, setFavorites } = favoriteSlice.actions;

export default favoriteSlice.reducer;
