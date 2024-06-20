import { GET_DATA } from './action-types';
import { getDataFailed, getDataSucceeded } from './actions';

export const testMiddleware = (store) => (next) => (action) => {
  if (action.type === GET_DATA) {
    console.log('GET_DATA action intercepted in middleware');
    fetch('https://fakestoreapi.com/products')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        console.log(res.json);
        return res.json();
      })
      .then((json) => {
        console.log('Data fetched successfully:', json);
        next(getDataSucceeded(json));
      })
      .catch((error) => {
        next(getDataFailed(error));
      });
  }
  return next(action);
};
