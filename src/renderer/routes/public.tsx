// import AuthRoutes from 'renderer/features/auth/route';

import { lazyImport } from 'renderer/utils/lazyImport';

const { AuthRoutes } = lazyImport(
  () => import('../features/auth/route'),
  'AuthRoutes'
);

const publicRoutes = [
  {
    path: '/auth/*',
    element: <AuthRoutes />,
  },
];

export default publicRoutes;
