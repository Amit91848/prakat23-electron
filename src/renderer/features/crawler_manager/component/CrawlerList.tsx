import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Spinner,
  Flex,
  Tag,
  Fade,
  ScaleFade,
} from '@chakra-ui/react';
import { StatusMap } from '../types';
import { useCrawlers } from '../api/getCrawlers';

const statusMap: StatusMap = {
  0: { label: 'Queued', colorScheme: 'gray' },
  1: { label: 'Crawling', colorScheme: 'blue' },
  3: { label: 'Crawled', colorScheme: 'green' },
  2: { label: 'Stopped', colorScheme: 'red' },
  4: { label: 'Error', colorScheme: 'red' },
};

export const CrawlerList = () => {
  const { isLoading, data } = useCrawlers({
    config: { refetchInterval: 2000 },
  });
  if (isLoading)
    return (
      <Flex justifyContent="center" alignItems="center">
        {' '}
        <Spinner color="red" />{' '}
      </Flex>
    );

  if (!data) return null;

  return (
    <Box flex="1" overflowY="auto">
      <ScaleFade initialScale={0.9} in={!isLoading}>
        <TableContainer>
          <Table size="lg" variant="simple">
            <Thead>
              <Tr>
                <Th>S. No</Th>
                <Th>Url</Th>
                <Th>Limit</Th>
                <Th>Same Domain</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((item, index) => (
                <Tr key={item._id || item.url}>
                  <Td>{index + 1}</Td>
                  <Td overflow="scroll" maxW="650px">
                    {item.url}
                  </Td>
                  <Td>{item.limit}</Td>
                  <Td>{item.same_domain ? 'Yes' : 'No'}</Td>
                  {/* <Td>{item.status}</Td> */}
                  <Td>
                    <Tag
                      variant="outline"
                      colorScheme={statusMap[item.status].colorScheme}
                    >
                      {statusMap[item.status].label}
                    </Tag>
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
