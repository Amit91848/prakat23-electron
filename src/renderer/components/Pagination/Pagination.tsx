import { Box } from '@chakra-ui/react';
import ReactPaginate from 'react-paginate';

interface PaginateProps {
  pageCount: number;
  onPageChange: VoidFunction;
}

export const Pagination = ({ pageCount, onPageChange }: PaginateProps) => {
  return (
    <Box w="full">
      <ReactPaginate
        className="react-paginate"
        onPageChange={onPageChange}
        breakLabel="..."
        nextLabel="next >"
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        previousLabel="< previous"
        pageCount={pageCount}
      />
    </Box>
  );
};
