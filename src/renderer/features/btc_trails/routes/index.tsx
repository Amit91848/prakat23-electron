import { Box } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import { Heading } from 'renderer/components/Heading';
import { BTCTrailPage } from '../components/BTCTrailPage';

export const BTCTrailRoute = () => {
  return (
    <Routes>
      <Route path="" element={<BTCTrailPage />} />
    </Routes>
  );
};
