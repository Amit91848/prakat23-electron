import { Route, Routes } from 'react-router-dom';
import { ReportManagerPage } from '../component/ReportManagerPage';

export const ReportManagerRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ReportManagerPage />} />
    </Routes>
  );
};
