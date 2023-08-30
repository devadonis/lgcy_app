import {configureStore, Middleware} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/dist/query';

const storeMiddlewares: Middleware[] = [];

import {
  useSelector as _useSelector,
  useDispatch as _useDispatch,
} from 'react-redux';

import {
  actions as postsActions,
  reducer as postsReducer,
  name as postsName,
} from './posts/slice';

import * as postsSelectors from './posts/selectors';

export const createStore = () => {
  const store = configureStore({
    reducer: {
      [postsName]: postsReducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(...storeMiddlewares),
  });
  setupListeners(store.dispatch);
  return store;
};

export const store = createStore();

export const actions = {
  [postsName]: postsActions,
};

export type RootState = ReturnType<typeof store.getState>;

export const selectors = {
  [postsName]: postsSelectors,
};

export const useDispatch = () => _useDispatch();
export const useSelector = _useSelector;
