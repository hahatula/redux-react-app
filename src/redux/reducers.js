import { INCREASE_VALUE, DECREASE_VALUE, KEY_DOWN } from "./action-types";
export const firstReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREASE_VALUE:
      return state + 1;
    case DECREASE_VALUE:
      return state - 1;
  }
  return state;
};

export const secondReducer = (state = "Change me!", action) => {
  switch (action.type) {
    case KEY_DOWN:
      return action.payload;
  }
  return state;
}