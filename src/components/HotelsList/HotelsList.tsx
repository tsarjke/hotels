import React, { useMemo } from 'react';
import { IHotelInfo, ISortOption } from '../../types/types';
import sortHotels from '../../utils/sortHotels';
import HotelsItem from '../HotelItem/HotelItem';

import cl from './HotelList.module.css';

interface HotelListProps {
  pics?: boolean;
  items: IHotelInfo[];
  nothingTitle?: string;
  onCLick?: (item: IHotelInfo) => void;
  sortOption?: ISortOption;
  isLoading?: boolean;
  className?: string;
}

const HotelsList: React.FC<HotelListProps> = ({
  pics,
  items,
  nothingTitle,
  onCLick,
  sortOption,
  isLoading,
  className,
}) => {
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  const sortedItems = useMemo(() => {
    if (items.length > 1 && sortOption?.direction) {
      return sortHotels(sortOption, items);
    }
    return items;
  }, [sortOption, items]);

  return (
    <div className={[cl.container, className].join(' ')}>
      {sortedItems.length ? (
        sortedItems.map((hotelInfo) => (
          <HotelsItem key={hotelInfo.hotelId} hotel={hotelInfo} pic={pics} onCLick={onCLick} />
        ))
      ) : (
        <h4 className={cl.nothingTitle}>{nothingTitle}</h4>
      )}
    </div>
  );
};

HotelsList.defaultProps = {
  pics: false,
  nothingTitle: '',
  onCLick: () => null,
  sortOption: { direction: '', parameter: '' },
  isLoading: false,
  className: '',
};

export default HotelsList;
