import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  uid: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.uid = action.payload.uid;
    },
    removeUser(state) {
      state.email = null;
      state.uid = null;
    },
    setError(state, action) {
      state.error = action.payload.error;
      console.log(action);
    },
  },
});

export const { setUser, removeUser, setError } = userSlice.actions;

export default userSlice.reducer;
