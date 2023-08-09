import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Box,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  Stack,
  Text,
  Flex,
} from '@chakra-ui/react';
import { AddressInfo, DirectLinks } from './BTCTrailPage';

interface Props {
  isOpen: boolean;
  onClose: VoidFunction;
  information: AddressInfo | DirectLinks;
  title: string;
  type: 'links' | 'address';
}

export const ViewDataModal = ({
  isOpen,
  onClose,
  information,
  title,
  type,
}: Props) => {
  return (
    <Modal isCentered size="6xl" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent color="textHeading">
        <ModalHeader>
          <Heading> {title}</Heading>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody overflowY="scroll" p="10" maxH="calc(100vh - 300px)">
          {type === 'address' && (
            <>
              <Stack mb="8" direction="row" gap="3">
                {/* {type} */}
                <Text fontSize="lg" as="b">
                  Balance: {information.balance}
                </Text>
                <Text fontSize="lg" as="b">
                  {' '}
                  Total Received: {information.total_received}
                </Text>
                <Text fontSize="lg" as="b">
                  {' '}
                  Total Sent: {information.total_sent}
                </Text>
              </Stack>
              <Box>
                <Heading mb="2">Incoming</Heading>
                <TableContainer>
                  <Table variant="simple">
                    <Thead>
                      <Tr>
                        <Th>S.No</Th>
                        <Th>From</Th>
                        <Th>Amount</Th>
                        <Th>Date</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {information.incoming_transactions.length !== 0 ? (
                        information.incoming_transactions.map(
                          (transaction, index) => (
                            <Tr>
                              <Td maxW="10">{index + 1}</Td>
                              <Td>{transaction.sender}</Td>
                              <Td>{transaction.amount}</Td>
                              <Td>
                                {new Date(
                                  transaction.timestamp
                                ).toLocaleString()}
                              </Td>
                            </Tr>
                          )
                        )
                      ) : (
                        <Flex justifyContent="center">
                          There were no incoming transactions
                        </Flex>
                      )}
                    </Tbody>
                  </Table>
                </TableContainer>
              </Box>
              <Box>
                <Heading mt="2">Outgoing</Heading>
                <TableContainer>
                  <Table variant="simple">
                    <Thead>
                      <Tr>
                        <Th>S.No</Th>
                        <Th>To</Th>
                        <Th>Amount</Th>
                        <Th>Date</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {information.outgoing_transactions.length !== 0 ? (
                        information.outgoing_transactions.map(
                          (transaction, index) => (
                            <Tr>
                              <Td>{index + 1}</Td>
                              <Td>{transaction.receiver}</Td>
                              <Td>{transaction.amount}</Td>
                              <Td>
                                {new Date(
                                  transaction.timestamp
                                ).toLocaleString()}
                              </Td>
                            </Tr>
                          )
                        )
                      ) : (
                        <Flex>There are no outgoing transactions</Flex>
                      )}
                    </Tbody>
                  </Table>
                </TableContainer>
              </Box>
            </>
          )}

          {type === 'links' && (
            <Box>
              <TableContainer>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>S.No</Th>
                      <Th>Address</Th>
                      <Th>Balance</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {information.length !== 0 &&
                      information.map((info, index) => (
                        <Tr>
                          <Td maxW="10">{index + 1}</Td>
                          <Td>{info.address}</Td>
                          <Td>{info.amount}</Td>
                        </Tr>
                      ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
          )}
        </ModalBody>

        <ModalFooter>
          <Button variant="primary" mr={3} onClick={onClose}>
            Close
          </Button>
          {/* <Button variant="ghost">Secondary Action</Button> */}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
