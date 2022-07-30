import { useRoutes } from 'react-router-dom';

import Design from '../design/design';
import { Error } from '../error';
import All from '../all/all';
import SinglePage from '../single-page/single-page';
import Typography from '../typography/typography';
import Ui from '../ui/ui';
import Ux from '../ux/ux';

const routes = [
  {
    path: '/',
    element: <All />,
  },
  {
    path: '/design',
    element: <Design />,
  },
  {
    path: '/ux',
    element: <Ux />,
  },
  {
    path: '/ui',
    element: <Ui />,
  },
  {
    path: '/typography',
    element: <Typography />,
  },
  {
    path: '/posts/:postId',
    element: <SinglePage />,
  },
  {
    path: '*',
    element: <Error />,
  },
];

export const Routes = () => {
  const elements = useRoutes(routes);

  return elements;
};
