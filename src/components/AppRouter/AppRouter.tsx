/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../../router/routes';
import { useAppSelector } from '../../store/hooks';
// import TestComponent from '../TestComponent/TestComponent';

const AppRouter: React.FC = () => {
  const { isAuth, isLoading } = useAppSelector((store) => store.hotel);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  // const options = {
  //   text: 'qwerty',
  // };

  // if (isAuth) {
  //   return <TestComponent {...options} />;
  // }

  return (
    <Routes>
      {isAuth
        ? privateRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element {...route.props} />}
          />
        ))
        : publicRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element {...route.props} />}
          />
        ))}
    </Routes>
  );
};

export default AppRouter;
