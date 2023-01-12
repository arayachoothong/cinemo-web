import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profile: {
    username: '',
    profileUrl: '/assets/images/avatars/avatar_default.jpg',
  },
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setProfile, setIsLoggedIn } = userSlice.actions;

export default userSlice.reducer;
