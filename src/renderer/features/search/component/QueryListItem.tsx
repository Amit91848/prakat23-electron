import axios from 'axios';
import {
  Box,
  Button,
  Fade,
  Flex,
  Grid,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Tags } from './Tag/Tags';
import { SearchPageResponse } from '../types';

interface Props {
  q: SearchPageResponse;
}

export const QueryListItem = ({ q }: Props) => {
  const handleGenerateReport = async () => {
    const response = await axios.post('http://164.52.214.150/genreport', {
      user_id: '22',
      obj_id: q.id,
    });

    console.log(response.data);
  };

  return (
    <Fade in>
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
        <Stack w="fit-content" maxW="650px">
          <Box overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
            <Text fontSize="lg" as="b">
              {' '}
              {q.title}
            </Text>
          </Box>
          <Box
            ml="2"
            overflow="hidden"
            textOverflow="ellipsis"
            whiteSpace="nowrap"
          >
            <Text fontSize="sm"> {q.url} </Text>
          </Box>
        </Stack>
        <Grid>
          {/* <Tags tag /> */}
          <Popover>
            <PopoverTrigger>
              <Button
                color="textHeading"
                _hover={{ background: 'transparent' }}
                variant="outline"
              >
                Tags
              </Button>
            </PopoverTrigger>
            <PopoverContent
              boxShadow="2xl"
              color="textHeading"
              background="darkbg"
            >
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader p="2">
                <Text as="b"> Tags Identified by Our Model </Text>
              </PopoverHeader>
              <PopoverBody>
                <Box>
                  <Text>
                    {q.tags.map((tag, index) => (
                      // {index > 0 && ', '} {tag}
                      // <Text color="whiteAlpha.700">
                      <span>
                        {index > 0 && ', '} {tag}
                      </span>
                      // </Text>
                    ))}
                  </Text>
                </Box>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Grid>
        <Box>
          <Button onClick={handleGenerateReport} variant="primaryRedBtn">
            Generate Report
          </Button>
        </Box>
      </Flex>
    </Fade>
  );
};
