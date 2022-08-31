import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetctHotelsInfoRequest, setAuth } from '../store/reducers/hotel/hotelSlice';

const Main: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { hotels } = useAppSelector((store) => store.hotel);

  const logout = () => {
    dispatch(setAuth(false));
    localStorage.setItem('auth', 'false');
    navigate('/login', { replace: true });
  };

  const getHotelInfo = () => {
    dispatch(
      fetctHotelsInfoRequest({ location: 'Moscow', checkIn: '2022-10-10', checkOut: '2022-10-12' }),
    );
  };

  return (
    <div>
      <h2>Hotel private page</h2>
      <button type="button" onClick={logout}>
        Logout
      </button>
      <button type="button" onClick={getHotelInfo}>
        Get hotel info
      </button>
      {hotels.map((hotel, index) => (
        <div key={hotel.hotelName}>
          {index}
          .
          {' '}
          {hotel.hotelName}
        </div>
      ))}
    </div>
  );
};

export default Main;
