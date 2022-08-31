import { createContext } from 'react';
import { IAuth } from '../global/types';

const initialContext = {
  isAuth: false,
  isLoading: false,
};

const AuthContext = createContext<IAuth>(initialContext);

export default AuthContext;
