import { Flex, Tag, TagCloseButton, TagLabel } from '@chakra-ui/react';

interface Props {
  tags: string;
  onRemoveTags: React.Dispatch<React.SetStateAction<string>>;
  isAnyTagApplied: boolean;
}

export const Tags = ({ tags, onRemoveTags, isAnyTagApplied }: Props) => {
  return (
    <Flex m="1" mb="2" px="6" gap="3">
      {/* {[...Array(10)].map(() => ( */}
      {isAnyTagApplied && (
        <Tag size="md" variant="outline" borderRadius="lg">
          <TagLabel>{tags}</TagLabel>
          <TagCloseButton onClick={() => onRemoveTags('')} />
        </Tag>
      )}
      {/* ))} */}
    </Flex>
  );
};
