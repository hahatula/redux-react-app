import { configureStore } from '@reduxjs/toolkit';
import { firstReducer, secondReducer, apiReducer } from './reducers';
import { testMiddleware } from './middleware';

export const store = configureStore({
  reducer: {
    increaseDecrease: firstReducer,
    userIsTyping: secondReducer,
    getProducts: apiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(testMiddleware),
});
