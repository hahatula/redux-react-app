import {
  INCREASE_VALUE,
  DECREASE_VALUE,
  CHANGE_TEXT,
  GET_DATA,
  GET_DATA_SUCCEEDED,
  GET_DATA_FAILED,
  GET_USERS,
  GET_USERS_SUCCEEDED,
  GET_USERS_FAILED,
} from './action-types';

export const firstReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREASE_VALUE:
      return state + 1;
    case DECREASE_VALUE:
      return state - 1;
    default:
      return state;
  }
};

export const secondReducer = (state = 'Change me!', action) => {
  switch (action.type) {
    case CHANGE_TEXT:
      return action.payload;
    default:
      return state;
  }
};

const initStore = {
  products: [],
  users: [],
  loadingProducts: false,
  loadingUsers: false,
  error: null,
};

export const apiReducer = (state = initStore, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        loadingProducts: true,
      };
    case GET_DATA_SUCCEEDED:
      return {
        ...state,
        products: action.payload,
        loadingProducts: false,
      };
    case GET_DATA_FAILED:
      return {
        ...state,
        loadingProducts: false,
        error: action.payload,
      };
    case GET_USERS:
      return {
        ...state,
        loadingUsers: true,
      };
    case GET_USERS_SUCCEEDED:
      return {
        ...state,
        users: action.payload,
        loadingUsers: false,
      };
    case GET_USERS_FAILED:
      return {
        ...state,
        loadingUsers: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
