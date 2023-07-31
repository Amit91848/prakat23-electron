import { Flex, Tag, TagCloseButton, TagLabel } from '@chakra-ui/react';

export const Tags = () => {
  return (
    <Flex m="1" mb="2" px="6" gap="3">
      {/* {[...Array(10)].map(() => ( */}
      <Tag size="md" variant="outline" borderRadius="lg">
        <TagLabel>Drugs</TagLabel>
        <TagCloseButton />
      </Tag>
      {/* ))} */}
    </Flex>
  );
};
