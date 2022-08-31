import { all } from 'redux-saga/effects';
import { hotelWathcer } from './handlers/hotelHandler';

export default function* rootSaga() {
  yield all([hotelWathcer()]);
}
