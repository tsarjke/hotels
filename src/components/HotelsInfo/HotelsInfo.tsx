import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setLike, toggleFavourites } from '../../store/reducers/hotel/hotelSlice';
import { IHotelInfo } from '../../types/types';
import Carousel from '../Carousel/Carousel';
import DateStr from '../DateStr/DateStr';
import HotelsList from '../HotelsList/HotelsList';
import Panel from '../UI/Panel/Panel';

import cl from './HotelsInfo.module.css';

const HotelsInfo: React.FC = () => {
  const {
    hotels,
    favourites,
    searchData: { checkIn, days, location },
    error,
    isLoading,
  } = useAppSelector((store) => store.hotel);
  const dispatch = useAppDispatch();

  const hotelsWithCurrentDate = hotels.map((hotelInfo) => ({ ...hotelInfo, checkIn, days }));

  const itemClickHandler = (hotel: IHotelInfo) => {
    dispatch(setLike(hotel));
    dispatch(toggleFavourites(hotel));
  };

  return (
    <Panel>
      <div className={cl.header}>
        {!error && location && checkIn ? (
          <h2 className={cl.title}>{`Отели > ${location}`}</h2>
        ) : (
          <h2 className={cl.title}>Отели</h2>
        )}
        <DateStr date={checkIn} classname={cl.date} />
      </div>
      <Carousel className={cl.carousel} />
      <h3 className={cl.listLabel}>
        {'Добавлено в Избранное: '}
        <span className={cl.favNumber}>{favourites.length}</span>
        {' отелей'}
      </h3>
      <HotelsList
        pics
        items={hotelsWithCurrentDate}
        nothingTitle="Отели не найдены"
        onCLick={itemClickHandler}
        isLoading={isLoading}
      />
    </Panel>
  );
};

export default HotelsInfo;
