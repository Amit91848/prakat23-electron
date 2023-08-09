import { Route, Routes } from 'react-router-dom';
import { DBStats } from '../component/DBStats';

export const DBStatsRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<DBStats />} />
    </Routes>
  );
};
