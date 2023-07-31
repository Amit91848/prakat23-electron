import { Box, Heading as CHeading } from '@chakra-ui/react';

interface Props {
  title: string;
}

export const Heading = ({ title }: Props) => {
  return (
    <Box py="4" px="6">
      <CHeading>{title}</CHeading>
    </Box>
  );
};
