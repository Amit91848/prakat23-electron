import { Route, Routes } from 'react-router-dom';
import { DataBreachAnalysisPage } from '../components/BreachAnalysisPage';

export const DataBreachAnalysisRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<DataBreachAnalysisPage />} />
    </Routes>
  );
};
