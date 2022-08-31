import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useAppDispatch } from './store/hooks';
import AppRouter from './components/AppRouter/AppRouter';
import { setAuth, setLoading } from './store/reducers/hotel/hotelSlice';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  // const { isAuth } = useAppSelector((store) => store.hotel);

  useEffect(() => {
    const isLogged = JSON.parse(localStorage.getItem('auth') || '');

    if (isLogged) {
      dispatch(setAuth(isLogged));
    }
    dispatch(setLoading(false));
  }, []);

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
