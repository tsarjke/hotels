export interface IAuth {
  isAuth: boolean;
  setAuth?: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
}

export interface IHotelInfo {
  priceAvg: number;
  stars: number;
  hotelName: string;
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
