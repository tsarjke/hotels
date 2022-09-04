import React from 'react';
import { useNavigate } from 'react-router-dom';
import Favourites from '../../components/Favourites/Favourites';
import HotelsInfo from '../../components/HotelsInfo/HotelsInfo';
import SearchPanel from '../../components/SearchPanel/SearchPanel';
import { useAppDispatch } from '../../store/hooks';
import { setAuth } from '../../store/reducers/hotel/hotelSlice';

import cl from './MainPage.module.css';

const MainPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(setAuth(false));
    localStorage.setItem('auth', 'false');
    navigate('/login', { replace: true });
  };

  return (
    <div className={cl.container}>
      <header className={cl.header}>
        <h1 className={cl.title}>Simple Hotel Check</h1>
        <button className={cl.logout} type="button" onClick={logout}>
          Выйти
        </button>
      </header>
      <main className={cl.mainSectionContainer}>
        <aside className={cl.aside}>
          <SearchPanel />
          <Favourites />
        </aside>
        <section className={cl.hotels}>
          <HotelsInfo />
        </section>
      </main>
    </div>
  );
};

export default MainPage;
