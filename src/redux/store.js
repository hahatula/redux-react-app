import { configureStore } from '@reduxjs/toolkit';
import { firstReducer, secondReducer, apiReducer } from './reducers';
import { fakeStoreMiddleware } from './middleware';

export const store = configureStore({
  reducer: {
    increaseDecrease: firstReducer,
    userIsTyping: secondReducer,
    getData: apiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fakeStoreMiddleware),
});
