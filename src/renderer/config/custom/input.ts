import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  field: {
    fontFamily: 'mono', // change the font family
  },
});

const search = definePartsStyle({
  field: {
    background: '#2F3034',
    borderRadius: 'lg',
  },
});

export const inputTheme = defineMultiStyleConfig({
  baseStyle,
  variants: { search },
});
