import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: null,
  bill: null,
};

const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    fetchInfo(state, action) {
      state.username = action.payload.username;
      state.bill = action.payload.bill;
    },
  },
});

export const { fetchInfo } = infoSlice.actions;

export default infoSlice.reducer;
