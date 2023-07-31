import { Box } from '@chakra-ui/react';
import { QueryListItem } from './QueryListItem';
import { SearchPageResponse } from '../types';

interface Props {
  queryList: SearchPageResponse[];
}

export const QueryList = ({ queryList }: Props) => {
  return (
    <Box flex="1" overflowY="auto">
      {/* {[...Array(100)].map((_, index) => (
        <QueryListItem key={index} />
      ))} */}
      {queryList && queryList.map((q) => <QueryListItem key={q.score} q={q} />)}
    </Box>
  );
};
