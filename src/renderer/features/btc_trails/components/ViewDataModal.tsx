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
} from '@chakra-ui/react';
import { AddressInfo } from './BTCTrailPage';

interface Props {
  isOpen: boolean;
  onClose: VoidFunction;
  information: AddressInfo;
}

export const ViewDataModal = ({ isOpen, onClose, information }: Props) => {
  return (
    <Modal isCentered size="6xl" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent background="darkbg" color="textHeading">
        <ModalHeader>Information about the address</ModalHeader>
        <ModalCloseButton />
        <ModalBody overflowY="scroll" p="10" maxH="calc(100vh - 300px)">
          <Stack direction="row" gap="3">
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
            <Text fontSize="lg">Incoming</Text>
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
                  {information.incoming_transactions.length !== 0 &&
                    information.incoming_transactions.map(
                      (transaction, index) => (
                        <Tr>
                          <Td maxW="10">{index + 1}</Td>
                          <Td>{transaction.sender}</Td>
                          <Td>{transaction.amount}</Td>
                          <Td>
                            {new Date(transaction.timestamp).toLocaleString()}
                          </Td>
                        </Tr>
                      )
                    )}
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th>To convert</Th>
                    <Th>into</Th>
                    <Th isNumeric>multiply by</Th>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
          </Box>
          <Box>
            <Heading>Outgoing</Heading>
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
                  {information.outgoing_transactions.length !== 0 &&
                    information.outgoing_transactions.map(
                      (transaction, index) => (
                        <Tr>
                          <Td>{index + 1}</Td>
                          <Td>{transaction.receiver}</Td>
                          <Td>{transaction.amount}</Td>
                          <Td>
                            {new Date(transaction.timestamp).toLocaleString()}
                          </Td>
                        </Tr>
                      )
                    )}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
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
