import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useAppDispatch } from './store/hooks';
import AppRouter from './components/AppRouter/AppRouter';
import { setAuth, setLoading } from './store/reducers/hotel/hotelSlice';

import './styles/styles.css';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const authValue = localStorage.getItem('auth');

    let isLogged;

    if (typeof authValue === 'string') {
      isLogged = JSON.parse(authValue);
    }

    if (isLogged) {
      dispatch(setAuth(isLogged));
    }
    dispatch(setLoading(false));
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <AppRouter />
      </div>
    </BrowserRouter>
  );
};

export default App;
