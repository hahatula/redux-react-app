import { configureStore } from "@reduxjs/toolkit";
import { firstReducer } from "./reducers";

export const store = configureStore({
  reducer: firstReducer,
});
