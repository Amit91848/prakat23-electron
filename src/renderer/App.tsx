import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import AppProvider from './providers/AppProvider';
import AppRoutes from './routes';

export default function App() {
  return (
    <ChakraProvider>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </ChakraProvider>
  );
}
