import React, { useEffect, useMemo, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter/AppRouter';
import AuthContext from './context';

const App: React.FC = () => {
  const [isAuth, setAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const authValue = useMemo(() => ({ isAuth, setAuth, isLoading }), [isAuth, isLoading]);

  useEffect(() => {
    const isLogged = JSON.parse(localStorage.getItem('auth') || '');

    if (isLogged) {
      setAuth(isLogged);
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={authValue}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
