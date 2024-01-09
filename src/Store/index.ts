import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../Services/api';
import { rootReducer } from './reduсer';

const api = createAPI();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
