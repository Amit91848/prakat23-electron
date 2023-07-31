import { Box, Button, Flex, Grid, Stack } from '@chakra-ui/react';
import { Tags } from './Tag/Tags';
import { SearchPageResponse } from '../types';

interface Props {
  q: SearchPageResponse;
}

export const QueryListItem = ({ q }: Props) => {
  return (
    <Flex
      _hover={{
        background: '#292325',
      }}
      borderBottom="2px"
      borderBottomColor="#2E2F34"
      h="28"
      px="6"
      justifyContent="space-between"
      alignItems="center"
    >
      <Stack overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
        <Box>{q.title}</Box>
        <Box>{q.url}</Box>
      </Stack>
      <Grid>
        <Tags />
      </Grid>
      <Box>
        <Button variant="primaryRedBtn">Generate Report</Button>
      </Box>
    </Flex>
  );
};
