import { Link, useRoutes } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

import protectedRoutes from './protected';
import publicRoutes from './public';

function Landing() {
  return (
    <div className="main">
      Landing
      <Link to="/auth/login">
        <Button type="button">Login</Button>
      </Link>
      <Link to="/app/dashboard">
        <Button type="button">Dashboard</Button>
      </Link>
    </div>
  );
}

// TODO Implement Authentication
// const auth = false;

function AppRoutes() {
  const commonRoutes = [
    {
      path: '/',
      element: <Landing />,
    },
  ];

  // const routes = auth ? protectedRoutes : publicRoutes;
  // const element = useRoutes([ ...routes, ...commonRoutes ]);
  const element = useRoutes([
    ...protectedRoutes,
    ...commonRoutes,
    ...publicRoutes,
  ]);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{element}</>;
}

export default AppRoutes;
