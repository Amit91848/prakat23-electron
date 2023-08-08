import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Text,
  Box,
  Stack,
  Flex,
  Spacer,
  Button,
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Heading } from 'renderer/components/Heading';
import { ViewDataModal } from './ViewDataModal';
import { BTCTrail } from './BTCTrail';

export interface BTCAddress {
  btc_entity: string;
  urls: string[];
}

export interface AddressInfo {
  balance: string;
  total_received: string;
  total_sent: string;
  incoming_transactions: IncomingTransactions[];
  outgoing_transactions: OutgoingTransactions[];
}

export interface IncomingTransactions {
  amount: string;
  hash: string;
  sender: string;
  timestamp: string;
}

export interface OutgoingTransactions {
  amount: string;
  hash: string;
  receiver: string;
  timestamp: string;
}

export const BTCTrailPage = () => {
  const [btcTrail, setbtcTrail] = useState<BTCAddress[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addressInfo, setAddressInfo] = useState<AddressInfo>();

  const fetchBTCAddress = async () => {
    const response = await axios.get('http://localhost:8000/btc_address');
    setbtcTrail(response.data);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    fetchBTCAddress();
  }, []);
  return (
    <Stack h="full" overflow="scroll">
      <Heading title="Bitcoin Trail" />

      {btcTrail &&
        btcTrail.map((btc) => (
          <BTCTrail
            btc={btc}
            setIsModalOpen={setIsModalOpen}
            key={btc.btc_entity}
            setAddressInfo={setAddressInfo}
          />
        ))}
      {isModalOpen && addressInfo && (
        <ViewDataModal
          information={addressInfo}
          isOpen={isModalOpen}
          onClose={handleModalClose}
        />
      )}
    </Stack>
  );
};
