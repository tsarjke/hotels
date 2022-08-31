import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store/hooks';
import { setAuth } from '../store/reducers/hotel';

const Main: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(setAuth(false));
    localStorage.setItem('auth', 'false');
    navigate('/login', { replace: true });
  };

  return (
    <div>
      <h2>Hotel private page</h2>
      <button type="button" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Main;
