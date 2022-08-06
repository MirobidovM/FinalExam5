import { useAuth } from './hooks/useAuth';

import { PrivateApp } from './private-app';
import { PublicApp } from './public-app';

import './app.css';

export const App = () => {
  const [token] = useAuth();
  if (token) {
    return <PrivateApp />;
  }
  return <PublicApp />;
};
