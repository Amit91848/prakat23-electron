import { Route, Routes } from 'react-router-dom';
import { BTCTrailPage } from '../components/BTCTrailPage';

export const BTCTrailRoute = () => {
  return (
    <Routes>
      <Route path="" element={<BTCTrailPage />} />
    </Routes>
  );
};
