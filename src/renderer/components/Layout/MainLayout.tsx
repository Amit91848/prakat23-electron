import { Flex, Stack } from '@chakra-ui/layout';
import { FaSearchengin } from 'react-icons/fa';
import { IconType } from 'react-icons';
import {
  Button,
  ButtonProps,
  Text,
  IconButton,
  useColorMode,
  Select,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { GiLongLeggedSpider } from 'react-icons/gi';
import { HiOutlineDocumentDuplicate } from 'react-icons/hi';
import { BsDatabaseFillX } from 'react-icons/bs';
import { FaBitcoin } from 'react-icons/fa';
import { AiFillPieChart } from 'react-icons/ai';
import { RiSpyFill } from 'react-icons/ri';
import storage from 'renderer/lib/storage';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useLocales } from 'locales';
import { useTranslation } from 'react-i18next';

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
        <Text fontSize="lg">{text}</Text>
      </Flex>
    </Button>
  );
}

function Sidebar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { t, onChangeLang } = useLocales();

  return (
    <Stack spacing="0" minW="16rem" borderRight="2px #2E2F34 solid" w="64">
      <IconButton
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
        aria-label="Toggle Color Mode"
      />
      <Select
        className="translation"
        onChange={(e) => {
          console.log(e.target.value);
          onChangeLang(e.target.value);
        }}
      >
        <option value="en">English</option>
        <option value="hi">हिंदी</option>
      </Select>
      <SidebarButton
        ButtonIcon={FaSearchengin}
        link="/app/search"
        text={t('search')}
      />
      <SidebarButton
        ButtonIcon={HiOutlineDocumentDuplicate}
        link="/app/report-manager"
        text={t('view_reports')}
      />
      <SidebarButton
        ButtonIcon={GiLongLeggedSpider}
        link="/app/crawler"
        text={t('crawler_manager')}
      />
      <SidebarButton
        ButtonIcon={FaBitcoin}
        link="/app/bitcoin-trails"
        text={t('btc_trails')}
      />
      <SidebarButton
        ButtonIcon={AiFillPieChart}
        link="/app/db-stats"
        text={t('db_stats')}
      />
      <SidebarButton
        ButtonIcon={RiSpyFill}
        link="/app/tor-stats"
        text={t('tor_stats')}
      />
      <SidebarButton
        ButtonIcon={BsDatabaseFillX}
        link="/app/data-breach-analysis"
        text={t('db_breach_analysis')}
      />

      {/* <Spacer /> */}
      <SidebarButton
        ButtonIcon={FiLogOut}
        mt="auto"
        link="/auth/login"
        text={t('logout')}
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
