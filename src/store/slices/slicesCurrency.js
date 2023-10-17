import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currency: null,
  date: null,
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    fetchCurrency(state, action) {
      state.currency = action.payload.currency;
      state.date = action.payload.date;
    },
  },
});

export const { fetchCurrency } = currencySlice.actions;

export default currencySlice.reducer;
