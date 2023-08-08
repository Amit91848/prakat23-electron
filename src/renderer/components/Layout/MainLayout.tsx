import { Flex, Stack } from '@chakra-ui/layout';
import { FaSearchengin } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { Button, ButtonProps, Icon, Text, Spacer } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { GiLongLeggedSpider } from 'react-icons/gi';
import { HiOutlineDocumentDuplicate } from 'react-icons/hi';
import storage from 'renderer/lib/storage';

interface Props {
  text: string;
  link: string;
  ButtonIcon: IconType;
}

function SidebarButton({
  text,
  link,
  ButtonIcon,
  ...options
}: Props & ButtonProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const isSelected = location.pathname === link;
  return (
    <Button
      key={text}
      borderRadius="none"
      _hover={{
        background: '#292325',
        scale: 1,
      }}
      w="100.5%"
      leftIcon={<ButtonIcon color={isSelected ? '#e43831' : 'textHeading'} />}
      color={isSelected ? '#e43831' : 'textHeading'}
      onClick={() => {
        if (text === 'Logout') {
          storage.remove('token');
          storage.remove('user');
        }
        navigate(link);
      }}
      background="transparent"
      p="6"
      borderRight={isSelected ? '2px solid #e43831' : 'none'}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...options}
    >
      <Flex alignItems="center">
        {text === 'Logout' && <Icon as={ButtonIcon} mr="3" />}
        <Text fontSize="lg">{text}</Text>
      </Flex>
    </Button>
  );
}

function Sidebar() {
  return (
    <Stack spacing="0" minW="16rem" borderRight="2px #2E2F34 solid" w="64">
      <Link to="/app/dashboard">
        <Button>Dashboard</Button>
      </Link>
      <SidebarButton
        ButtonIcon={FaSearchengin}
        link="/app/search"
        text="Search"
      />
      <SidebarButton
        ButtonIcon={HiOutlineDocumentDuplicate}
        link="/app/report-manager"
        text="Report"
      />
      <SidebarButton
        ButtonIcon={GiLongLeggedSpider}
        link="/app/crawler"
        text="Crawler Manager"
      />
      <Spacer />
      <SidebarButton
        ButtonIcon={FiLogOut}
        mt="auto"
        link="/auth/login"
        text="Logout"
      />
    </Stack>
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
