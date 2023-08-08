import axios from 'axios';
import { useEffect, useState } from 'react';
import { Box, Divider, Stack } from '@chakra-ui/react';

import { Heading } from 'renderer/components/Heading';
import { Searchbar } from 'renderer/components/Searchbar/Searchbar';
import Pagination from 'renderer/components/Pagination/Pagination';

import { Tags } from './Tag/Tags';
import { QueryList } from './QueryList';
import { SearchPageResponse } from '../types';

export const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const pageCount = 20;
  const [page, setPage] = useState(1);

  const [queryResults, setQueryResults] = useState<SearchPageResponse[]>([]);

  const fetchSearchResults = async (q: string, p: number) => {
    const response = await axios.get(
      `http://localhost:8000/search/?q=${q}&page=${p}&pageCount=${pageCount}`
    );

    setQueryResults(response.data);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  useEffect(() => {
    if (searchQuery !== '') {
      setPage(1); // Reset the page to 1 when the search query changes
      fetchSearchResults(searchQuery, 1); // Fetch results with the new query and page 1
    }
  }, [searchQuery]);

  useEffect(() => {
    if (searchQuery !== '') {
      fetchSearchResults(searchQuery, page); // Fetch results with the updated page value
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <Stack h="full">
      <Heading title="Search" />
      <Box flex="1" overflow="hidden">
        <Stack h="full" spacing="0">
          <Searchbar query={searchQuery} queryChange={setSearchQuery} />
          <Tags />
          <Divider variant="primary" />
          <QueryList queryList={queryResults} />
          <Pagination
            currentPage={page}
            onPageChange={handlePageChange}
            totalPages={12}
          />
        </Stack>
      </Box>
    </Stack>
  );
};
