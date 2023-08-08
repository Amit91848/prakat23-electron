import { Divider, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import { Heading } from 'renderer/components/Heading';
import { Searchbar } from 'renderer/components/Searchbar/Searchbar';
import { ReportList } from './ReportsList';
import { IReport } from '../types';
import { ReportViewer } from './ReportViewer';

const demo: IReport[] = [
  {
    _id: 'abc_id123454',
    name: 'Report name glock',
    report: `
- The Hidden Onion Directory advertises a variety of illicit goods and services, including hacking tools, counterfeit credit cards, drugs, pornography, and more.
- The directory specifically mentions selling "DRUGS INTERNATIONAL MARKET DRUGS" on the onion link provided. This could be an indication of an international drug trafficking operation.
- The website charges a fee for new listings to discourage spam and scams, which could indicate that they are legitimate and trustworthy. However, this could also mean that they are more careful about who they accept as advertisers.
- There is no mention of gore or terrorism, but there is a warning against content related to these topics. This could be an indication that the website is aware of their potential liability if they were to host such material.
- The text emphasizes that users should proceed with caution and at their own risk when using the directory's services. This could indicate that the website is aware of the potential legal risks associated with their content, and are attempting to mitigate their liability.
- The Hidden Onion Directory advertises a variety of illicit goods and services, including hacking tools, counterfeit credit cards, drugs, pornography, and more.
- The directory specifically mentions selling "DRUGS INTERNATIONAL MARKET DRUGS" on the onion link provided. This could be an indication of an international drug trafficking operation.
- The website charges a fee for new listings to discourage spam and scams, which could indicate that they are legitimate and trustworthy. However, this could also mean that they are more careful about who they accept as advertisers.
- There is no mention of gore or terrorism, but there is a warning against content related to these topics. This could be an indication that the website is aware of their potential liability if they were to host such material.
- The text emphasizes that users should proceed with caution and at their own risk when using the directory's services. This could indicate that the website is aware of the potential legal risks associated with their content, and are attempting to mitigate their liability.
- The Hidden Onion Directory advertises a variety of illicit goods and services, including hacking tools, counterfeit credit cards, drugs, pornography, and more.
- The directory specifically mentions selling "DRUGS INTERNATIONAL MARKET DRUGS" on the onion link provided. This could be an indication of an international drug trafficking operation.
- The website charges a fee for new listings to discourage spam and scams, which could indicate that they are legitimate and trustworthy. However, this could also mean that they are more careful about who they accept as advertisers.
- There is no mention of gore or terrorism, but there is a warning against content related to these topics. This could be an indication that the website is aware of their potential liability if they were to host such material.
- The text emphasizes that users should proceed with caution and at their own risk when using the directory's services. This could indicate that the website is aware of the potential legal risks associated with their content, and are attempting to mitigate their liability.
- The Hidden Onion Directory advertises a variety of illicit goods and services, including hacking tools, counterfeit credit cards, drugs, pornography, and more.
- The directory specifically mentions selling "DRUGS INTERNATIONAL MARKET DRUGS" on the onion link provided. This could be an indication of an international drug trafficking operation.
- The website charges a fee for new listings to discourage spam and scams, which could indicate that they are legitimate and trustworthy. However, this could also mean that they are more careful about who they accept as advertisers.
- There is no mention of gore or terrorism, but there is a warning against content related to these topics. This could be an indication that the website is aware of their potential liability if they were to host such material.
- The text emphasizes that users should proceed with caution and at their own risk when using the directory's services. This could indicate that the website is aware of the potential legal risks associated with their content, and are attempting to mitigate their liability.
- The Hidden Onion Directory advertises a variety of illicit goods and services, including hacking tools, counterfeit credit cards, drugs, pornography, and more.
- The directory specifically mentions selling "DRUGS INTERNATIONAL MARKET DRUGS" on the onion link provided. This could be an indication of an international drug trafficking operation.
- The website charges a fee for new listings to discourage spam and scams, which could indicate that they are legitimate and trustworthy. However, this could also mean that they are more careful about who they accept as advertisers.
- There is no mention of gore or terrorism, but there is a warning against content related to these topics. This could be an indication that the website is aware of their potential liability if they were to host such material.
- The text emphasizes that users should proceed with caution and at their own risk when using the directory's services. This could indicate that the website is aware of the potential legal risks associated with their content, and are attempting to mitigate their liability.
- The Hidden Onion Directory advertises a variety of illicit goods and services, including hacking tools, counterfeit credit cards, drugs, pornography, and more.
- The directory specifically mentions selling "DRUGS INTERNATIONAL MARKET DRUGS" on the onion link provided. This could be an indication of an international drug trafficking operation.
- The website charges a fee for new listings to discourage spam and scams, which could indicate that they are legitimate and trustworthy. However, this could also mean that they are more careful about who they accept as advertisers.
- There is no mention of gore or terrorism, but there is a warning against content related to these topics. This could be an indication that the website is aware of their potential liability if they were to host such material.
- The text emphasizes that users should proceed with caution and at their own risk when using the directory's services. This could indicate that the website is aware of the potential legal risks associated with their content, and are attempting to mitigate their liability.
- The Hidden Onion Directory advertises a variety of illicit goods and services, including hacking tools, counterfeit credit cards, drugs, pornography, and more.
- The directory specifically mentions selling "DRUGS INTERNATIONAL MARKET DRUGS" on the onion link provided. This could be an indication of an international drug trafficking operation.
- The website charges a fee for new listings to discourage spam and scams, which could indicate that they are legitimate and trustworthy. However, this could also mean that they are more careful about who they accept as advertisers.
- There is no mention of gore or terrorism, but there is a warning against content related to these topics. This could be an indication that the website is aware of their potential liability if they were to host such material.
- The text emphasizes that users should proceed with caution and at their own risk when using the directory's services. This could indicate that the website is aware of the potential legal risks associated with their content, and are attempting to mitigate their liability.
- The Hidden Onion Directory advertises a variety of illicit goods and services, including hacking tools, counterfeit credit cards, drugs, pornography, and more.
- The directory specifically mentions selling "DRUGS INTERNATIONAL MARKET DRUGS" on the onion link provided. This could be an indication of an international drug trafficking operation.
- The website charges a fee for new listings to discourage spam and scams, which could indicate that they are legitimate and trustworthy. However, this could also mean that they are more careful about who they accept as advertisers.
- There is no mention of gore or terrorism, but there is a warning against content related to these topics. This could be an indication that the website is aware of their potential liability if they were to host such material.
- The text emphasizes that users should proceed with caution and at their own risk when using the directory's services. This could indicate that the website is aware of the potential legal risks associated with their content, and are attempting to mitigate their liability.
- The Hidden Onion Directory advertises a variety of illicit goods and services, including hacking tools, counterfeit credit cards, drugs, pornography, and more.
- The directory specifically mentions selling "DRUGS INTERNATIONAL MARKET DRUGS" on the onion link provided. This could be an indication of an international drug trafficking operation.
- The website charges a fee for new listings to discourage spam and scams, which could indicate that they are legitimate and trustworthy. However, this could also mean that they are more careful about who they accept as advertisers.
- There is no mention of gore or terrorism, but there is a warning against content related to these topics. This could be an indication that the website is aware of their potential liability if they were to host such material.
- The text emphasizes that users should proceed with caution and at their own risk when using the directory's services. This could indicate that the website is aware of the potential legal risks associated with their content, and are attempting to mitigate their liability.
`,
    status: 2,
    url_id: 'url_id12334',
    user_id: 'user_idk928u48',
  },
];

export const ReportManagerPage = () => {
  const [reportQuery, setReportQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reportBody, setReportBody] = useState('');

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleViewOpen = (report: string) => {
    setIsModalOpen(true);
    setReportBody(report);
  };

  return (
    <Stack h="full" spacing="2">
      <Heading title="Report Manager" />
      <Divider />

      <Searchbar query={reportQuery} queryChange={setReportQuery} />
      <ReportList reports={demo} handleViewReport={handleViewOpen} />
      {isModalOpen && (
        <ReportViewer
          report={reportBody}
          isOpen={isModalOpen}
          onClose={handleModalClose}
        />
      )}
    </Stack>
  );
};
