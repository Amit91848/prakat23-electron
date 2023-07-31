import { Button } from '@chakra-ui/react';
import { Link, Outlet } from 'react-router-dom';
import { MainLayout } from 'renderer/components/Layout';
import { lazyImport } from 'renderer/utils';

const { SearchRoutes } = lazyImport(
  () => import('renderer/features/search'),
  'SearchRoutes'
);

function App() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}

function Dashboard() {
  return (
    <>
      <div className="main">
        Protected Routes
        <Link to="/">
          <Button> Back to Landing</Button>
        </Link>{' '}
        <Link to="/app/search/">
          <Button> Search Page</Button>
        </Link>{' '}
      </div>{' '}
    </>
  );
}

const protectedRoutes = [
  {
    path: '/app',
    element: <App />,
    children: [
      { path: 'dashboard/', element: <Dashboard /> },
      { path: 'search/*', element: <SearchRoutes /> },
    ],
  },
];

export default protectedRoutes;
