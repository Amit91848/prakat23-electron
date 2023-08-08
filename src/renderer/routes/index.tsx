import { Link, useNavigate, useRoutes } from 'react-router-dom';
import { useEffect } from 'react';
import { Button } from '@chakra-ui/react';

import storage from 'renderer/lib/storage';

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
  const auth = storage.getToken() && storage.getUser();

  const routes = auth ? protectedRoutes : publicRoutes;
  const element = useRoutes([...routes, ...commonRoutes]);
  // const element = useRoutes([
  //   ...protectedRoutes,
  //   ...commonRoutes,
  //   ...publicRoutes,
  // ]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) {
      navigate('/auth/login'); // Replace '/login' with the path you want to redirect to
    } else {
      // If the user is authenticated and accidentally on the '/login' page, redirect them to '/app'
      if (window.location.pathname === '/login') {
        navigate('/app/dashboard'); // Replace '/app' with the path you want to redirect the authenticated user to
      }
    }
  }, [auth, navigate]);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{element}</>;
}

export default AppRoutes;
