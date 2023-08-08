import { Box, Flex, Spinner, Stack } from '@chakra-ui/react';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClientProvider } from 'react-query';
import { MemoryRouter as Router } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools';
import { queryClient } from 'renderer/lib/react-query';

function ErrorFallback() {
  return (
    <Stack
      minW="100vw"
      minH="100vh"
      justifyContent="center"
      alignItems="center"
      color="red.500"
      background="darkbg"
    >
      <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
      <button
        type="button"
        className="mt-4"
        onClick={() => window.location.assign(window.location.origin)}
      >
        Refresh
      </button>
    </Stack>
  );
}

type AppProviderProps = {
  children: React.ReactNode;
};

function AppProvider({ children }: AppProviderProps) {
  return (
    <React.Suspense
      fallback={
        <Flex
          minH="100vh"
          minW="100vw"
          justifyContent="center"
          alignItems="center"
          background="darkbg"
        >
          <Spinner size="xl" color="red" />
        </Flex>
      }
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HelmetProvider>
          <QueryClientProvider client={queryClient}>
            {/* {process.env.NODE_ENV !== 'test' && <ReactQueryDevtools />} */}
            <Router>{children}</Router>
          </QueryClientProvider>
        </HelmetProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
}

export default AppProvider;
