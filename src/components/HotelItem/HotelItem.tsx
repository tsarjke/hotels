import React from 'react';
import house from '../../assets/images/house.svg';
import { IHotelInfo } from '../../types/types';
import DateStr from '../DateStr/DateStr';
import Like from '../Like/Like';
import Price from '../Price/Price';
import Stars from '../Stars/Stars';

import cl from './HotelItem.module.css';

interface HotelsItemProps {
  hotel: IHotelInfo;
  pic?: boolean;
  onCLick?: (item: IHotelInfo) => void;
}

const HotelsItem: React.FC<HotelsItemProps> = ({ hotel, pic, onCLick }) => {
  const {
    hotelName, priceAvg, stars, like, checkIn, days,
  } = hotel;

  return (
    <div className={cl.container}>
      {pic && (
        <div className={cl.imgWrapper}>
          <img src={house} alt="hotel pic" />
        </div>
      )}
      <div className={cl.mainInfo}>
        <h4 className={cl.hotelName}>{hotelName}</h4>
        <div className={cl.period}>
          <DateStr date={checkIn} />
          {' '}
          <span className={cl.dash}>-</span>
          {' '}
          <span>
            {days}
            {' '}
            дней
          </span>
        </div>
        <div className={cl.stars}>
          <Stars count={+stars} />
          <span className={cl.priceLabel}>Price:</span>
        </div>
      </div>
      <div className={cl.price}>
        <Like className={cl.like} like={like} onCLick={onCLick} item={hotel} />
        <Price currency="₽" amount={priceAvg.toString()} />
      </div>
    </div>
  );
};

HotelsItem.defaultProps = {
  pic: false,
  onCLick: () => null,
};

export default HotelsItem;
