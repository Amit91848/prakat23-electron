import {
  Box,
  Button,
  ScaleFade,
  Stack,
  Table,
  TableContainer,
  Tag,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { IReport } from '../types';
import { StatusMap } from 'renderer/features/crawler_manager/types';
import { useLocales } from 'locales';

interface Props {
  reports: IReport[];
  handleViewReport: (report: string, report_id: string) => void;
}

export const ReportList = ({ reports, handleViewReport }: Props) => {
  const { t } = useLocales();
  const statusMap: StatusMap = {
    0: { label: t('generate_report'), colorScheme: 'grey' },
    1: { label: t('generating_report'), colorScheme: 'blue' },
    2: { label: t('generated_report'), colorScheme: 'red' },
  };
  return (
    <Box mt="4" flex="1" overflowY="auto">
      <ScaleFade initialScale={0.9} in>
        <TableContainer>
          <Table size="lg" variant="simple">
            <Thead>
              <Tr>
                <Th>{t('s_no')}</Th>
                <Th>{t('name')}</Th>
                <Th>{t('information')}</Th>
                <Th>{t('status')}</Th>
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
                      <Stack maxWidth="450px" overflow="clip">
                        <Text>{item.url}</Text>
                        <Text>{item.title}</Text>
                      </Stack>
                    </Td>
                    {/* <Td>{item.status}</Td> */}
                    <Td>
                      <Tag
                        variant="outline"
                        colorScheme={statusMap[item.status].colorScheme}
                      >
                        {statusMap[item.status].label}
                      </Tag>
                    </Td>
                    <Td>
                      <Button
                        onClick={() => handleViewReport(item.report, item._id)}
                        variant="primaryRedBtn"
                        isDisabled={item.status < 2}
                      >
                        {t('view_report')}
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
