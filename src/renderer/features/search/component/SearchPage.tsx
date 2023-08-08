import axios from 'axios';
import { useEffect, useState } from 'react';

import { Heading } from 'renderer/components/Heading';
import Pagination from 'renderer/components/Pagination/Pagination';

import { QueryList } from './QueryList';
import { SearchPageResponse } from '../types';
import { Box, Divider, Stack } from '@chakra-ui/react';
import { SearchBar } from 'renderer/components/Searchbar/Searchbar';
import { AddTagFilterModal } from 'renderer/components/Searchbar/AddTagFilterModal';
import { Tags } from './Tag/Tags';

export const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const pageCount = 20;
  const [page, setPage] = useState(1);

  const [queryResults, setQueryResults] = useState<SearchPageResponse[]>([]);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [tag, setTag] = useState<string>('');

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const fetchSearchResults = async (q: string, p: number, tag: string) => {
    const response = await axios.get(
      `http://localhost:8000/search/?q=${q}&page=${p}&pageCount=${pageCount}&tag=${tag}`
    );

    setQueryResults(response.data);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  useEffect(() => {
    if (searchQuery !== '') {
      setPage(1); // Reset the page to 1 when the search query changes
      fetchSearchResults(searchQuery, 1, tag); // Fetch results with the new query and page 1
    }
  }, [searchQuery, tag]);

  useEffect(() => {
    if (searchQuery !== '') {
      fetchSearchResults(searchQuery, page, tag); // Fetch results with the updated page value
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, tag]);

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
          <Tags tags={tag} onRemoveTags={setTag} isAnyTagApplied={tag !== ''} />
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
        <AddTagFilterModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onAddTagFilter={setTag}
        />
      )}
    </Stack>
  );
};
