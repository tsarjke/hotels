import React from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../../components/UI/Form/Form';
import Modal from '../../components/UI/Modal/Modal';
import { useAppDispatch } from '../../store/hooks';
import { setAuth } from '../../store/reducers/hotel/hotelSlice';

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
    <Modal title="Simple Hotel Check" titlePosition="center">
      <Form bntText="Войти" submit={login} inputsData={[{ label: 'Логин' }, { label: 'Пароль' }]} />
    </Modal>
  );
};

export default Login;
