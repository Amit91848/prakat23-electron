import { Route, Routes } from 'react-router-dom';
import { TorStats } from '../component/TorStats';

export const TorStatsRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<TorStats />} />
    </Routes>
  );
};
