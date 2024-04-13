import { configureStore } from "@reduxjs/toolkit";
import { firstReducer, secondReducer } from "./reducers";

export const store = configureStore({
  reducer: {
    increaseDecrease: firstReducer,
    userTypes: secondReducer, 
  }
});
