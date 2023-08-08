import { Box, Flex } from '@chakra-ui/react';
import { ICrawlerListItem } from '../types';

interface Props {
  item: ICrawlerListItem;
}

export const CrawlerListItem = ({ item }: Props) => {
  return (
    <Flex
      borderBottom="2px"
      borderBottomColor="#2E2F34"
      h="28"
      px="6"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>{item.url}</Box>
    </Flex>
  );
};
