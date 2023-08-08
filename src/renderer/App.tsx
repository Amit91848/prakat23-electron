import { CSSReset, ChakraProvider } from '@chakra-ui/react';
import './App.css';
import AppProvider from './providers/AppProvider';
import AppRoutes from './routes';
import lightTheme from './config/theme-light';

export default function App() {
  return (
    <ChakraProvider theme={lightTheme}>
      <AppProvider>
        <CSSReset />
        <AppRoutes />
      </AppProvider>
    </ChakraProvider>
  );
}
