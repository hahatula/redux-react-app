import { INCREASE_VALUE, DECREASE_VALUE, KEY_DOWN } from "./action-types";
export const increaseValue = () => ({
  type: INCREASE_VALUE,
});
export const decreaseValue = () => ({
    type: DECREASE_VALUE,
  });
export const inputValue = (text) => ({
  type: KEY_DOWN,
  payload: text,
})
