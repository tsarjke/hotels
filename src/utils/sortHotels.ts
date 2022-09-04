import { IHotelInfo, ISortOption } from '../types/types';

const sortHotels = (sortOption: ISortOption, items: IHotelInfo[]) => {
  const { direction, parameter } = sortOption;
  if (!direction || !parameter) {
    return items;
  }
  switch (direction) {
    case 'desc':
      return [...items].sort((a, b) => a[parameter] - b[parameter]);
    case 'asc':
      return [...items].sort((a, b) => b[parameter] - a[parameter]);
    default:
      return items;
  }
};

export default sortHotels;
