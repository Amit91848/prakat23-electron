import axios from 'axios';
import { useEffect, useState } from 'react';

import { Heading } from 'renderer/components/Heading';
import Pagination from 'renderer/components/Pagination/Pagination';

import { QueryList } from './QueryList';
import { SearchPageResponse } from '../types';
import { Box, Divider, Stack } from '@chakra-ui/react';
import { SearchBar } from 'renderer/components/Searchbar/Searchbar';
import { AddTagsFilterModal } from 'renderer/components/Searchbar/AddTagsFilterModal';
import { Tags } from './Tag/Tags';
import { useQuery, useQueryClient } from 'react-query';

export const SearchPage = () => {
  // const [searchQuery, setSearchQuery] = useState<string>('');
  // const pageCount = 20;
  // const [page, setPage] = useState(1);

  // const [queryResults, setQueryResults] = useState<SearchPageResponse[]>([]);

  // const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [tags, setTags] = useState<string[]>([]);

  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  // };

  // const fetchSearchResults = async (q: string, p: number, tag: string[]) => {
  //   const response = await axios.get(
  //     `http://localhost:8000/search/?q=${q}&page=${p}&pageCount=${pageCount}&tags=${tags.toString()}`
  //   );

  //   setQueryResults(response.data);
  // };

  // const handlePageChange = (newPage: number) => {
  //   setPage(newPage);
  // };

  // useEffect(() => {
  //   if (searchQuery !== '') {
  //     setPage(1); // Reset the page to 1 when the search query changes
  //     fetchSearchResults(searchQuery, 1, tags); // Fetch results with the new query and page 1
  //   }
  // }, [searchQuery, tags]);

  // useEffect(() => {
  //   if (searchQuery !== '') {
  //     fetchSearchResults(searchQuery, page, tags); // Fetch results with the updated page value
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [page, tags]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const pageCount = 20;
  const [page, setPage] = useState(1);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const queryClient = useQueryClient();

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const fetchSearchResults = async ({ queryKey }: any) => {
    const [_key, { q, p, tags }] = queryKey;
    const response = await axios.get(
      `http://localhost:8000/search/?q=${q}&page=${p}&pageCount=${pageCount}&tags=${tags.toString()}`
    );
    return response.data;
  };

  const { data: queryResults } = useQuery(
    ['search', { q: searchQuery, p: page, tags }],
    fetchSearchResults,
    {
      refetchInterval: 3000,
      enabled: searchQuery !== '', // Only enable the query when there's a search query
    }
  );

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  // Whenever the page or tags change, invalidate the query to trigger a refetch
  useEffect(() => {
    if (searchQuery !== '') {
      queryClient.invalidateQueries([
        'search',
        { q: searchQuery, p: page, tags },
      ]);
    }
  }, [page, tags, searchQuery, queryClient]);

  return (
    <Stack h="full">
      <Heading title="Search" />
      <Box flex="1" overflow="hidden">
        <Stack h="full" spacing="0">
          <SearchBar
            query={searchQuery}
            queryChange={setSearchQuery}
            setTagModalOpen={setIsModalOpen}
          />
          <Tags
            tags={tags}
            onRemoveTags={setTags}
            isAnyTagApplied={tags.length !== 0}
          />
          <Divider variant="primary" />
          <QueryList queryList={queryResults} />
          <Pagination
            currentPage={page}
            onPageChange={handlePageChange}
            totalPages={12}
          />
        </Stack>
      </Box>
      {isModalOpen && (
        <AddTagsFilterModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onAddTagsFilter={setTags}
        />
      )}
    </Stack>
  );
};
