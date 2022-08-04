import { useContext } from 'react';
import { AuthContext } from '../context/auth';

export const useAuth = (props) => {
  const { token, setToken } = useContext(AuthContext);
  return props ? [setToken] : [token, setToken];
};
