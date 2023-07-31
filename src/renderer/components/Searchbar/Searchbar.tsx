import React from 'react';
import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { FilterIcon } from '../Icons/FilterIcon';

interface Props {
  query: string;
  queryChange: React.Dispatch<React.SetStateAction<string>>;
}

export const Searchbar = ({ query, queryChange }: Props) => {
  return (
    <Flex py="1" px="6" w="100%" gap="4">
      <InputGroup>
        <Input
          value={query}
          onChange={(e) => {
            queryChange(e.currentTarget.value);
          }}
          variant="search"
          type="text"
          placeholder="Enter a search query"
          _placeholder={{ color: '#A0AEC0' }}
        />
        <InputLeftElement>
          {' '}
          <SearchIcon />{' '}
        </InputLeftElement>
      </InputGroup>
      <Button background="#2F3034">
        <FilterIcon />
      </Button>
    </Flex>
  );
};
