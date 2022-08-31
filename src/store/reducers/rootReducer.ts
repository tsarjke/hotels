import { combineReducers } from 'redux';

import hotel from './hotel/hotelSlice';

const rootReducer = combineReducers({
  hotel,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
