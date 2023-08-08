import { Flex, Tag, TagCloseButton, TagLabel } from '@chakra-ui/react';

interface Props {
  tags: string[];
  onRemoveTags: React.Dispatch<React.SetStateAction<string[]>>;
  isAnyTagApplied: boolean;
}

export const Tags = ({ tags, onRemoveTags, isAnyTagApplied }: Props) => {
  return (
    <Flex m="1" mb="2" px="6" gap="3">
      {/* {[...Array(10)].map(() => ( */}
      {isAnyTagApplied &&
        tags.map((tag, i) => (
          <Tag size="md" variant="outline" borderRadius="lg" key={i}>
            <TagLabel>{tag}</TagLabel>
            <TagCloseButton
              onClick={() =>
                onRemoveTags((prevState) =>
                  prevState.filter((stag) => stag !== tag)
                )
              }
            />
          </Tag>
        ))}
      {/* ))} */}
    </Flex>
  );
};
