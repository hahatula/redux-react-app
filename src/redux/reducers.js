import {
  INCREASE_VALUE,
  DECREASE_VALUE,
  CHANGE_TEXT,
  GET_DATA,
  GET_DATA_SUCCEEDED,
  GET_DATA_FAILED,
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
  loading: false,
  error: null,
};

export const apiReducer = (state = initStore, action) => {
  switch (action.type) {
    case GET_DATA:
      console.log('Handling GET_DATA action');
      return {
        ...state,
        loading: true
      };
    case GET_DATA_SUCCEEDED:
      console.log('Handling GET_DATA_SUCCEEDED action');
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case GET_DATA_FAILED:
      console.log('Handling GET_DATA_FAILED action');
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
