import { Divider, Flex, Spinner, Stack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Heading } from 'renderer/components/Heading';
import { SearchBar } from 'renderer/components/Searchbar/Searchbar';
import { ReportList } from './ReportsList';
import { IReport } from '../types';
import { ReportViewer } from './ReportViewer';
import axios from 'axios';
import { useReports } from '../api/getReports';

export const ReportManagerPage = () => {
  const [reportQuery, setReportQuery] = useState('');
  const { isLoading, data: reports } = useReports({
    config: { refetchInterval: 2000 },
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reportBody, setReportBody] = useState('');
  const [modalReportId, setModalReportId] = useState('');
  // const [reports, setReports] = useState<IReport[]>([]);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleViewOpen = (report: string, report_id: string) => {
    setIsModalOpen(true);
    setReportBody(report);
    setModalReportId(report_id);
  };

  if (isLoading)
    return (
      <Flex justifyContent="center" alignItems="center">
        {' '}
        <Spinner color="red" />{' '}
      </Flex>
    );

  if (!reports) return null;

  // const getAllReports = async () => {
  //   const response = await axios.get('http://localhost:8000/report/');
  //   setReports(response.data);
  // };

  // useEffect(() => {
  //   getAllReports();
  // }, []);

  return (
    <Stack h="full" spacing="2">
      <Heading title="Report Manager" />
      <Divider />

      {/* <SearchBar query={reportQuery} queryChange={setReportQuery} /> */}
      <ReportList reports={reports} handleViewReport={handleViewOpen} />
      {isModalOpen && (
        <ReportViewer
          report_id={modalReportId}
          report={reportBody}
          isOpen={isModalOpen}
          onClose={handleModalClose}
        />
      )}
    </Stack>
  );
};
