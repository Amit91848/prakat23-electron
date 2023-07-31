import { Box, Flex, Stack } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <Box minW="16rem" borderRight="2px #2E2F34 solid" w="64">
      <Link to="/app/dashboard">
        <Button>Dashboard</Button>
      </Link>
    </Box>
  );
}

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Flex color="textHeading" background="darkbg">
      <Sidebar />

      <Stack h="100vh" overflow="hidden" flex="1">
        {children}
      </Stack>
    </Flex>
  );
};
