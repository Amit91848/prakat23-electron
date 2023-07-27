import { Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <Flex justifyContent="center" alignItems="center" minH="100vh" minW="100vw">
      {children}
    </Flex>
  );
}

export default Layout;
