/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IHotelInfo, IRequestForHotel } from '../../../types/types';

const hotels: IHotelInfo[] = [];

const initialState = {
  isAuth: false,
  isLoading: true,
  error: '',
  hotels,
};

const hotel = createSlice({
  name: 'hotel',
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    fetctHotelsInfoRequest(_, _action: PayloadAction<IRequestForHotel>) {},
    fetctHotelsInfoRSuccess(state, action: PayloadAction<IHotelInfo[]>) {
      state.hotels?.push(...action.payload);
    },
    fetctHotelsInfoError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export default hotel.reducer;
export const {
  setAuth,
  setLoading,
  fetctHotelsInfoRequest,
  fetctHotelsInfoRSuccess,
  fetctHotelsInfoError,
} = hotel.actions;
