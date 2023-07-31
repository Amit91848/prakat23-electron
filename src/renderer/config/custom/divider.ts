import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const primary = defineStyle({
  borderStyle: 'solid', // change the style of the border
  // marginY: '1.5rem',
  borderColor: '#2E2F34',
  borderWidth: '2px',
});

export const dividerTheme = defineStyleConfig({
  variants: { primary },
});
