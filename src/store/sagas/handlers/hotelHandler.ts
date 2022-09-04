/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  call, put, StrictEffect, takeLatest,
} from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import HotelService from '../requests/hotelRequest';
import {
  fetctHotelsInfoRSuccess,
  fetctHotelsInfoRequest,
  fetctHotelsInfoError,
  setLoading,
} from '../../reducers/hotel/hotelSlice';
import { IHotelInfo, IRequestForHotel } from '../../../types/types';

export function* handleGetHotels(
  action: PayloadAction<IRequestForHotel>,
): Generator<StrictEffect, void, IHotelInfo[]> {
  try {
    put(setLoading(true));
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
  } finally {
    put(setLoading(false));
  }
}

export function* hotelWathcer() {
  yield takeLatest(fetctHotelsInfoRequest.type, handleGetHotels);
}
