import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store/hooks';
import { setAuth } from '../store/reducers/hotel/hotelSlice';

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const login = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setAuth(true));
    localStorage.setItem('auth', 'true');
    navigate('/hotels', { replace: true });
  };

  return (
    <div>
      <h2>Login page</h2>
      <form onSubmit={login}>
        <input type="text" placeholder="Login" />
        <input type="text" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
