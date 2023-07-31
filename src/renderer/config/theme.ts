import { extendTheme } from '@chakra-ui/theme-utils';
import { buttonTheme, dividerTheme, inputTheme } from './custom';

export const theme = extendTheme({
  colors: {
    darkbg: '#222327',
    textHeading: '#9E9EA0',
  },
  components: {
    Divider: dividerTheme,
    Input: inputTheme,
    Button: buttonTheme,
  },
});
