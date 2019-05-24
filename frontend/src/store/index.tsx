import { createStore as _createStore, applyMiddleware } from 'redux'
import { logger } from '../middleware'
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export const createStore = () => {
  let middleware = [ thunk ];
  let isProd = process.env.NODE_ENV === "production";

  if (!isProd) {
    // @ts-ignore
    middleware.push(logger);
  }

  return _createStore(rootReducer, applyMiddleware.apply(null, middleware));
};

export default createStore;