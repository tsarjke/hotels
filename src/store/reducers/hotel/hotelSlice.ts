/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  IHotelInfo, IRequestForHotel, IHotelSearch, ISortOption,
} from '../../../types/types';
import pic1 from '../../../assets/images/slider-pic-1.jpg';
import pic2 from '../../../assets/images/slider-pic-2.jpg';
import pic3 from '../../../assets/images/slider-pic-3.jpg';
import pic4 from '../../../assets/images/slider-pic-4.jpg';

const searchData: IHotelSearch = {
  location: '',
  checkIn: '',
  days: '',
};

const initialState = {
  isAuth: false,
  isLoading: true,
  error: '',
  hotels: <IHotelInfo[]>[],
  favourites: <IHotelInfo[]>[],
  searchData,
  sortOption: <ISortOption>{
    parameter: '',
    direction: '',
  },
  sliderPics: [pic1, pic2, pic3, pic4],
};

interface IGeneralhotelInfo {
  id: number[];
  date: {
    checkIn: string;
    days: string;
  }[];
}

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
    fetctHotelsInfoRequest(_, action: PayloadAction<IRequestForHotel>) {
      action.payload.currency = 'rub';
    },
    fetctHotelsInfoRSuccess(state, action: PayloadAction<IHotelInfo[]>) {
      // При записи новых данных необходимо проверить, не в избранных ли
      // загруженная информация по отелю (дата, срок, id), чтобы выставить лайк
      // Проверка только по id не подходит, потому что дата и срок могут быть разными
      const generalFavouritesInfo = state.favourites.reduce(
        (acc: IGeneralhotelInfo, { hotelId, checkIn, days }) => {
          acc.id.push(hotelId);
          acc.date.push({ checkIn, days });
          return acc;
        },
        { id: [], date: [] },
      );

      state.hotels = action.payload.map((hotelInfo) => {
        const matchedId = generalFavouritesInfo.id.indexOf(hotelInfo.hotelId);
        if (matchedId !== -1) {
          const { checkIn, days } = state.searchData;
          const { checkIn: checkInFav, days: daysFav } = generalFavouritesInfo.date[matchedId];
          if (checkIn === checkInFav && days === daysFav) {
            hotelInfo.like = true;
          }
        }
        return { ...hotelInfo, ...state.searchData };
      });
    },
    fetctHotelsInfoError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.hotels = [];
    },
    setSearchData(state, action: PayloadAction<IHotelSearch>) {
      state.searchData = { ...action.payload };
    },
    setSortOprion(state, action: PayloadAction<ISortOption>) {
      state.sortOption = { ...action.payload };
    },
    setLike(state, action: PayloadAction<IHotelInfo>) {
      const id = action.payload.hotelId;
      state.hotels = state.hotels.map((hotelInfo) => {
        if (hotelInfo.hotelId === id) {
          hotelInfo.like = !hotelInfo.like;
        }
        return hotelInfo;
      });
    },
    toggleFavourites(state, action: PayloadAction<IHotelInfo>) {
      // После лайка необходимо проверить избранное, чтобы добавить или удалить информацию
      const id = action.payload.hotelId;
      const isFavourite = state.favourites.some(({ hotelId }) => hotelId === id);
      if (isFavourite) {
        state.favourites = state.favourites.filter(({ hotelId }) => hotelId !== id);
      } else {
        state.favourites.push({ ...action.payload, like: true });
      }
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
  setSearchData,
  setLike,
  toggleFavourites,
  setSortOprion,
} = hotel.actions;
