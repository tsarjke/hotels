/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../../components/UI/Form/Form';
import Modal from '../../components/UI/Modal/Modal';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setAuth } from '../../store/reducers/hotel/hotelSlice';
import validateField from '../../utils/validateField';

import cl from './Login.module.css';

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: '', password: '' });
  const [formError, setFormError] = useState({ emailError: false, passwordError: false });

  // todo Необходимо оптимизировать
  const inputsData = [
    {
      label: 'Логин',
      name: 'login',
      value: formData.email,
      onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
        setFormData({ ...formData, email: event.target.value }),
      onBlur: (event: React.ChangeEvent<HTMLInputElement>) =>
        setFormError({
          ...formError,
          emailError: validateField('email', event.target.value),
        }),
      error: formError.emailError,
      errorText: 'Логин не прошел валидацию',
      onFocus: () =>
        setFormError({
          ...formError,
          emailError: false,
        }),
    },
    {
      label: 'Пароль',
      name: 'password',
      type: 'password',
      value: formData.password,
      onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
        setFormData({ ...formData, password: event.target.value }),
      onBlur: (event: React.ChangeEvent<HTMLInputElement>) =>
        setFormError({
          ...formError,
          passwordError: validateField('password', event.target.value),
        }),
      error: formError.passwordError,
      errorText: 'Пароль не прошел валидацию',
      onFocus: () =>
        setFormError({
          ...formError,
          passwordError: false,
        }),
    },
  ];

  const login = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formError.emailError && !formError.passwordError && formData.email && formData.password) {
      dispatch(setAuth(true));
      localStorage.setItem('auth', 'true');
      navigate('/hotels', { replace: true });
    } else {
      setFormError({
        emailError: true,
        passwordError: true,
      });
    }
  };

  return (
    <Modal title="Simple Hotel Check" titlePosition="center" className={cl.bg}>
      <Form bntText="Войти" submit={login} inputsData={inputsData} />
    </Modal>
  );
};

export default Login;
