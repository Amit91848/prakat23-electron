import axios from 'axios';
import { useEffect, useState } from 'react';
import { Box, Divider, Stack } from '@chakra-ui/react';

import { Heading } from 'renderer/components/Heading';
import { Searchbar } from 'renderer/components/Searchbar/Searchbar';

import { Tags } from './Tag/Tags';
import { QueryList } from './QueryList';
import { SearchPageResponse } from '../types';

export const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [queryResults, setQueryResults] = useState<SearchPageResponse[]>([]);

  const fetchSearchResults = async (q: string) => {
    const response = await axios.get(`http://localhost:8000/search?q=${q}`);

    setQueryResults(response.data);
  };

  // const handlePageChange = (e) => {
  //   console.log(e);
  // };

  useEffect(() => {
    if (searchQuery !== '') fetchSearchResults(searchQuery);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  return (
    <Stack h="full">
      <Heading title="Search" />
      <Box flex="1" overflow="hidden">
        <Stack h="full" spacing="0">
          <Searchbar query={searchQuery} queryChange={setSearchQuery} />
          <Tags />
          <Divider variant="primary" />
          <QueryList queryList={queryResults} />
        </Stack>
      </Box>
    </Stack>
  );
};
