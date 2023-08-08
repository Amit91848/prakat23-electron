import { Box, Flex, Button } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
};

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const handlePrevPage = () => {
    onPageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <Flex py="4" justifyContent="center" gap="8" align="center">
      <Button
        variant="outline"
        _hover={{ backgroundColor: 'transparent', scale: '1.1' }}
        isDisabled={currentPage <= 1}
        onClick={handlePrevPage}
        leftIcon={<ChevronLeftIcon />}
        colorScheme="red"
      >
        Prev
      </Button>

      <Box mx={2}>{currentPage}</Box>

      <Button
        variant="outline"
        _hover={{ backgroundColor: 'transparent', scale: '1.1' }}
        isDisabled={currentPage === totalPages}
        onClick={handleNextPage}
        rightIcon={<ChevronRightIcon />}
        colorScheme="red"
      >
        Next
      </Button>
    </Flex>
  );
};

export default Pagination;
