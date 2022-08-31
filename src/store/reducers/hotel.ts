/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuth } from '../../global/types';

const initialState: IAuth = {
  isAuth: false,
  isLoading: true,
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
  },
});

export default hotel.reducer;
export const { setAuth, setLoading } = hotel.actions;
