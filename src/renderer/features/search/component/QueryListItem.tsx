import axios from 'axios';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  Fade,
  Flex,
  Grid,
  GridItem,
  Input,
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
import { SearchPageResponse } from '../types';
import { useRef, useState } from 'react';
import { useToast } from '@chakra-ui/react';

interface Props {
  q: SearchPageResponse;
}

interface AlertNameProps {
  isOpen: boolean;
  onClose: VoidFunction;
  q: SearchPageResponse;
}

function NameAlertDialog({ isOpen, onClose, q }: AlertNameProps) {
  const [name, setName] = useState('');
  const toast = useToast();
  const handleGenerateReport = async () => {
    const response = await axios.post('http://164.52.214.185/genreport', {
      user_id: '64cf89d9f4f48086a8fe1fa7',
      obj_id: q.id,
      name: name,
    });

    if (response.status === 200) {
      onClose();
      toast({
        title: 'Report is being created',
        description: 'Check the report tab to see the progress',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    }
    console.log(response.data);
  };
  const cancelRef = useRef();
  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Write a name for the report
          </AlertDialogHeader>

          <AlertDialogBody>
            <Input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button
              variant="primaryRedBtn"
              onClick={handleGenerateReport}
              ml={3}
            >
              Generate Report
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export const QueryListItem = ({ q }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Fade in>
      <Flex
        borderBottom="2px"
        borderBottomColor="#2E2F34"
        h="28"
        px="6"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid templateColumns="6fr 3fr 1fr" gap={4}>
          <GridItem>
            {' '}
            <Stack w="650px">
              <Box
                overflow="hidden"
                textOverflow="ellipsis"
                whiteSpace="nowrap"
              >
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
          </GridItem>
          {/* <Tags tag /> */}
          <GridItem display="flex" justifyContent="center">
            {' '}
            <Popover>
              <PopoverTrigger>
                <Button color="textHeading" variant="outline">
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
          </GridItem>
          <GridItem>
            <Box>
              <Button
                onClick={() => setIsModalOpen(true)}
                variant="primaryRedBtn"
              >
                Generate Report
              </Button>
            </Box>
          </GridItem>
        </Grid>
      </Flex>
      {isModalOpen && (
        <NameAlertDialog
          q={q}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </Fade>
  );
};
