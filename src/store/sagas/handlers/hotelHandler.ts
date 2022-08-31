import {
  call, put, StrictEffect, takeLatest,
} from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import HotelService from '../requests/hotelRequest';
import {
  fetctHotelsInfoRSuccess,
  fetctHotelsInfoRequest,
  fetctHotelsInfoError,
} from '../../reducers/hotel/hotelSlice';
import { IHotelInfo, IRequestForHotel } from '../../../types/types';

export function* handleGetHotels(
  action: PayloadAction<IRequestForHotel>,
): Generator<StrictEffect, void, IHotelInfo[]> {
  try {
    const data = yield call(HotelService.requestHotelsInfo, action.payload);
    yield put(fetctHotelsInfoRSuccess(data));
  } catch (error: unknown) {
    if (typeof error === 'string') {
      yield put(fetctHotelsInfoError(error));
    } else if (error instanceof Error) {
      yield put(fetctHotelsInfoError(error.message));
    } else {
      yield put(fetctHotelsInfoError('Something went wrong'));
    }
  }
}

export function* hotelWathcer() {
  yield takeLatest(fetctHotelsInfoRequest.type, handleGetHotels);
}
