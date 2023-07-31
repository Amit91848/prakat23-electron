import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const primaryRedBtn = defineStyle({
  background:
    'linear-gradient(90deg, rgba(226,53,48,1) 0%, rgba(237,70,54,1) 100%)',
  color: 'white',
});

export const buttonTheme = defineStyleConfig({
  variants: { primaryRedBtn },
});
