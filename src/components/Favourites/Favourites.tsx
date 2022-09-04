import React, { useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setLike, setSortOprion, toggleFavourites } from '../../store/reducers/hotel/hotelSlice';
import { IHotelInfo, ISortOption } from '../../types/types';
import HotelsList from '../HotelsList/HotelsList';
import SortBtn from '../UI/SortBtn/SortBtn';
import Panel from '../UI/Panel/Panel';

import cl from './Favourites.module.css';

const Favourites: React.FC = () => {
  const { favourites, sortOption } = useAppSelector((store) => store.hotel);
  const dispatch = useAppDispatch();

  const starsRef = useRef<HTMLInputElement | null>(null);
  const priceRef = useRef<HTMLInputElement | null>(null);

  const chechboxClickHandler = (newSortOption: ISortOption) => {
    dispatch(setSortOprion(newSortOption));
  };

  const itemClickHandler = (hotel: IHotelInfo) => {
    dispatch(setLike(hotel));
    dispatch(toggleFavourites(hotel));
  };

  return (
    <Panel title="Избранное" className={cl.container}>
      <div className={cl.sortContainer}>
        <SortBtn
          text="Рейтинг"
          name="filter"
          ref={starsRef}
          onCLick={chechboxClickHandler}
          parameter="stars"
        />
        <SortBtn
          text="Цена"
          name="filter"
          ref={priceRef}
          onCLick={chechboxClickHandler}
          parameter="priceAvg"
        />
      </div>
      <HotelsList
        items={favourites}
        nothingTitle="Избранных отелей нет"
        onCLick={itemClickHandler}
        sortOption={sortOption}
        className={cl.hotelList}
      />
    </Panel>
  );
};

export default Favourites;
