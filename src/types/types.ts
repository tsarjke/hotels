export interface IAuth {
  isAuth: boolean;
  setAuth?: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
}

export interface IHotelInfo {
  hotelId: number;
  priceAvg: number;
  stars: number;
  hotelName: string;
  like?: boolean;
  checkIn: string;
  days: string;
}

export interface IRoutes {
  path: string;
  element: React.FC<any>;
  props?: object;
}

export interface IRequestForHotel {
  location: string;
  currency?: string;
  checkIn: string;
  checkOut: string;
}

export interface IHotelSearch {
  location: string;
  checkIn: string;
  days: string;
}

export interface ISortOption {
  parameter: 'priceAvg' | 'stars' | '';
  direction: 'asc' | 'desc' | '';
}
