import { Navigate } from 'react-router-dom';
import { IRoutes } from '../global/types';
import Login from '../pages/Login';
import Main from '../pages/Main';

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
