import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import hotel from './reducers/hotel';

const rootReducer = combineReducers({
  hotel,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
