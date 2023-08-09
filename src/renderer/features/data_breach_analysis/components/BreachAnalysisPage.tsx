import {
  Box,
  Button,
  Divider,
  Flex,
  Input,
  List,
  ListIcon,
  ListItem,
  Spinner,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Heading } from 'renderer/components/Heading';
import { FcCancel } from 'react-icons/fc';
import axios from 'axios';

type GetBreachForEmail = string[];

export const DataBreachAnalysisPage = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const [breaches, setBreaches] = useState<GetBreachForEmail>([]);

  const checkForBreach = async () => {
    setLoading(true);
    const response = await axios.get(
      `http://localhost:8000/data_breach?email=${email}`
    );
    setBreaches(response.data);
    setLoading(false);
  };

  return (
    <Stack h="100vh">
      <Heading title="Data Breach Analysis" />
      <Divider />

      <Flex gap="8" p="4" mt="3">
        <Input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="text"
          placeholder="Enter your email to check if it has been pawned"
        />
        <Button onClick={checkForBreach}>Check</Button>
      </Flex>
      <Box py="3" px="6">
        {!breaches && <></>}
        {loading ? (
          <Spinner color="red" />
        ) : breaches.length > 0 ? (
          <>
            <Text>
              Your account was found in{' '}
              <span style={{ textDecoration: 'underline' }}>
                {' '}
                {breaches.length} breaches
              </span>{' '}
            </Text>
            <List pl="5" spacing={3}>
              {breaches.map((breach) => (
                <ListItem key={breach}>
                  <ListIcon as={FcCancel} color="green.500" />
                  {breach}
                </ListItem>
              ))}
            </List>
          </>
        ) : (
          <>
            <Text>
              {' '}
              Your account is safe. It was not found in any of the data breaches
            </Text>
          </>
        )}
      </Box>
    </Stack>
  );
};
