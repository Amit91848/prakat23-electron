import { Button, Stack } from '@chakra-ui/react';
import { Link, Outlet } from 'react-router-dom';
import { MainLayout } from 'renderer/components/Layout';
import { BTCTrailRoute } from 'renderer/features/btc_trails';
import { lazyImport } from 'renderer/utils';

const { SearchRoutes } = lazyImport(
  () => import('renderer/features/search'),
  'SearchRoutes'
);

const { CrawlerManagerRoutes } = lazyImport(
  () => import('renderer/features/crawler_manager'),
  'CrawlerManagerRoutes'
);

const { ReportManagerRoutes } = lazyImport(
  () => import('renderer/features/report_manager'),
  'ReportManagerRoutes'
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
        <Stack spacing="12">
          <Link to="/">
            <Button> Back to Landing</Button>
          </Link>{' '}
          <Link to="/app/search/">
            <Button> Search Page</Button>
          </Link>{' '}
          <Link to="/app/report-manager">
            <Button>Report Manager</Button>
          </Link>
          <Link to="/app/crawler">
            <Button>Crawler Manager</Button>
          </Link>
        </Stack>
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
      { path: 'crawler/*', element: <CrawlerManagerRoutes /> },
      { path: 'report-manager/*', element: <ReportManagerRoutes /> },
      { path: 'bitcoin-trails', element: <BTCTrailRoute /> },
    ],
  },
];

export default protectedRoutes;
