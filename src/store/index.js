import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/slicesUser";
import infoReducer from "./slices/slicesInfo";
import errorReducer from "./slices/slicesError";
import currencyReduser from "./slices/slicesCurrency";

export const store = configureStore({
  reducer: {
    user: userReducer,
    info: infoReducer,
    error: errorReducer,
    currency: currencyReduser,
  },
});
