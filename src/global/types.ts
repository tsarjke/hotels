export interface IAuth {
  isAuth: boolean;
  setAuth?: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
}

export interface IRoutes {
  path: string;
  element: React.FC<any>;
  props: object;
}
