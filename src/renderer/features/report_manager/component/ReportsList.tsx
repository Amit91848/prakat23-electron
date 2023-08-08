import {
  Box,
  Button,
  ScaleFade,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { IReport } from '../types';

interface Props {
  reports: IReport[];
  handleViewReport: (report: string) => void;
}

export const ReportList = ({ reports, handleViewReport }: Props) => {
  return (
    <Box mt="4" flex="1" overflowY="auto">
      <ScaleFade initialScale={0.9} in>
        <TableContainer>
          <Table size="lg" variant="simple">
            <Thead>
              <Tr>
                <Th>S. No</Th>
                <Th>Name</Th>
                <Th>Information</Th>
                <Th>Status</Th>
                {/* <Th>View Report</Th> */}
                <Th />
              </Tr>
            </Thead>
            <Tbody>
              {reports &&
                reports.map((item, index) => (
                  <Tr>
                    <Td>{index + 1}</Td>
                    <Td>{item.name}</Td>
                    <Td>
                      <Stack>
                        <Text>{item.url_id}</Text>
                        {/* <Text>{item.}</Text> */}
                      </Stack>
                    </Td>
                    <Td>{item.status}</Td>
                    <Td>
                      <Button
                        onClick={() => handleViewReport(item.report)}
                        variant="primaryRedBtn"
                      >
                        View Report
                      </Button>
                    </Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      </ScaleFade>
    </Box>
  );
};
