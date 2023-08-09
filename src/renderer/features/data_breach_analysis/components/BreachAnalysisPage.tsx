import { Box, Button, Divider, Flex, Input, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import { Heading } from 'renderer/components/Heading';

export const DataBreachAnalysisPage = () => {
  const [email, setEmail] = useState('');

  const onPressCheck = () => {
    console.log(email);
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
        <Button onClick={onPressCheck}>Check</Button>
      </Flex>
    </Stack>
  );
};
