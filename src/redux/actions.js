import {
  INCREASE_VALUE,
  DECREASE_VALUE,
  CHANGE_TEXT,
  GET_DATA,
  GET_DATA_FAILED,
  GET_DATA_SUCCEEDED,
  GET_USERS,
  GET_USERS_SUCCEEDED,
  GET_USERS_FAILED,
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
export const getProducts = () => ({
  type: GET_DATA,
});
export const getProductsSucceeded = (payload) => ({
  type: GET_DATA_SUCCEEDED,
  payload,
});
export const getProductsFailed = (error) => ({
  type: GET_DATA_FAILED,
  payload: error,
});

export const getUsers = () => ({
  type: GET_USERS,
});
export const getUsersSucceeded = (payload) => ({
  type: GET_USERS_SUCCEEDED,
  payload,
});
export const getUsersFailed = (error) => ({
  type: GET_USERS_FAILED,
  payload: error,
});
