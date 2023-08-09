import {
  Accordion,
  Box,
  AccordionItem,
  AccordionButton,
  Flex,
  AccordionIcon,
  Spacer,
  Button,
  AccordionPanel,
  Text,
} from '@chakra-ui/react';
import { AddressInfo, BTCAddress, DirectLinks } from './BTCTrailPage';
import axios from 'axios';
import { useState } from 'react';

interface Props {
  btc: BTCAddress;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setAddressInfo: React.Dispatch<React.SetStateAction<AddressInfo | undefined>>;
  setDirectlinks: React.Dispatch<React.SetStateAction<DirectLinks | undefined>>;
}

export const BTCTrail = ({
  btc,
  setIsModalOpen,
  setAddressInfo,
  setDirectlinks,
}: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDirectLinkLoading, setIsDirectLinkLoading] = useState(false);

  const fetchDirectLinks = async (address: string) => {
    setIsDirectLinkLoading(true);
    const response = await axios.get(
      `http://localhost:8000/btc_address/get_direct_links?address=${address}`
    );
    setIsDirectLinkLoading(false);
    setDirectlinks(response.data);
    setIsModalOpen(true);
  };

  const fetchAddressInfo = async (address: string) => {
    setIsLoading(true);
    const response = await axios.get<AddressInfo>(
      `http://localhost:8000/btc_address/get-data?address=${address}`
    );
    setAddressInfo(response.data);
    setIsLoading(false);
    setIsModalOpen(true);
  };
  return (
    <Accordion key={btc.btc_entity} allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Flex w="full">
              <AccordionIcon mr="5" />
              <Box as="span" flex="1" textAlign="left">
                {btc.btc_entity}
              </Box>
              <Spacer />
              <Button
                onClick={() => fetchAddressInfo(btc.btc_entity)}
                variant="primaryRedBtn"
                mr="5"
                isLoading={isLoading}
              >
                View data
              </Button>
              <Button
                onClick={() => fetchDirectLinks(btc.btc_entity)}
                isLoading={isDirectLinkLoading}
                variant="primaryRedBtn"
              >
                Get Direct Link
              </Button>
            </Flex>
          </AccordionButton>
        </h2>
        <AccordionPanel pl="4" pb={4}>
          {btc.urls.map((url) => (
            <Text>{url}</Text>
          ))}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
