import {
  INCREASE_VALUE,
  DECREASE_VALUE,
  CHANGE_TEXT,
  GET_DATA,
  GET_DATA_FAILED,
  GET_DATA_SUCCEEDED,
} from "./action-types";

export const increaseValue = () => ({
  type: INCREASE_VALUE,
});
export const decreaseValue = () => ({
  type: DECREASE_VALUE,
});
export const inputValue = (text) => ({
  type: CHANGE_TEXT,
  payload: text,
});

//for using middleware
export const getData = () => ({
  type: GET_DATA,
});
export const getDataSucceeded = (payload) => ({
  type: GET_DATA_SUCCEEDED,
  payload,
});
export const getDataFailed = (error) => ({
  type: GET_DATA_FAILED,
  payload: error,
});
