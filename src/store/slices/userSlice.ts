import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fullName: null,
  email: null,
  password: null,
  token: null,
  id: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.fullName = action.payload.fullName;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.password = action.payload.password;
      state.id = action.payload.id;
    },
    removeUser(state) {
      state.fullName = null;
      state.email = null;
      state.token = null;
      state.password = null;
      state.id = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
