import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import AppProvider from './providers/AppProvider';
import AppRoutes from './routes';
import { theme } from './config';

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </ChakraProvider>
  );
}
