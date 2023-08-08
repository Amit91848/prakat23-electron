import { Route, Routes } from 'react-router';
import { ManagerPage } from '../component/ManagerPage';

export const CrawlerManagerRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<ManagerPage />} />
    </Routes>
  );
};
