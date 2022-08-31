import { Navigate } from 'react-router-dom';
import TestComponent from '../components/TestComponent/TestComponent';
import { IRoutes } from '../global/types';

export const privateRoutes: IRoutes[] = [
  {
    path: '/private',
    element: TestComponent,
    props: { text: 'private', number: 1 },
  },
  {
    path: '/',
    element: Navigate,
    props: { to: '/private', replace: true },
  },
];

export const publicRoutes: IRoutes[] = [
  {
    path: '/public',
    element: TestComponent,
    props: { text: 'public', number: 2 },
  },
  {
    path: '/',
    element: Navigate,
    props: { to: '/public', replace: true },
  },
];
