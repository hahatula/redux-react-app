import { GET_DATA, GET_USERS } from './action-types';
import { getProductsFailed, getProductsSucceeded, getUsersSucceeded, getUsersFailed } from './actions';

const request = (url, successAction, failureAction, next) => {
  fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then((json) => {
        console.log(json);
      next(successAction(json));
    })
    .catch((error) => {
      next(failureAction(error));
    });
};

export const fakeStoreMiddleware = (store) => (next) => (action) => {
  if (action.type === GET_DATA) {
    request('https://fakestoreapi.com/products', getProductsSucceeded, getProductsFailed, next)
  }
  if (action.type === GET_USERS) {
    request('https://fakestoreapi.com/users', getUsersSucceeded, getUsersFailed, next)
  }
  return next(action);
};
