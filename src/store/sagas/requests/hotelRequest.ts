import axios, { AxiosRequestConfig } from 'axios';
import { IHotelInfo, IRequestForHotel } from '../../../types/types';

export default class HotelService {
  static async requestHotelsInfo(parameters: IRequestForHotel) {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: 'https://engine.hotellook.com/api/v2/cache.json',
      params: {
        ...parameters,
      },
    };

    return (await axios.request<IHotelInfo>(config)).data;
  }
}
