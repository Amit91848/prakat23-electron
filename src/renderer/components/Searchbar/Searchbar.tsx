import {
  Button,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { useLocales } from 'locales';
import { FaFilter, FaSearch } from 'react-icons/fa';

interface Props {
  query: string;
  queryChange: React.Dispatch<React.SetStateAction<string>>;
  setTagModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SearchBar = ({ query, queryChange, setTagModalOpen }: Props) => {
  const { t } = useLocales();
  console.log(query);
  return (
    <>
      <Flex py="1" px="6" w="100%" gap="4">
        <InputGroup>
          <Input
            value={query}
            onChange={(e) => {
              queryChange(e.currentTarget.value);
            }}
            variant="search"
            type="text"
            placeholder={t('enter_search_query')}
            _placeholder={{ color: '#A0AEC0' }}
          />
          <InputLeftElement>
            {' '}
            <Icon color="#717171" as={FaSearch} />{' '}
          </InputLeftElement>
        </InputGroup>
        <Button
          background="#2F3034"
          onClick={() => setTagModalOpen(true)}
          isDisabled={query === ''}
        >
          <Icon color="#717171" as={FaFilter} />{' '}
        </Button>
      </Flex>
    </>
  );
};
