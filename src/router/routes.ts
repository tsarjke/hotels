import { Navigate } from 'react-router-dom';
import { IRoutes } from '../types/types';
import Login from '../pages/Login/Login';
import Main from '../pages/MainPage/MainPage';

export const privateRoutes: IRoutes[] = [
  {
    path: '/hotels',
    element: Main,
  },
  {
    path: '/',
    element: Navigate,
    props: { to: '/hotels', replace: true },
  },
];

export const publicRoutes: IRoutes[] = [
  {
    path: '/login',
    element: Login,
  },
  {
    path: '/',
    element: Navigate,
    props: { to: '/login', replace: true },
  },
];
