import { extendTheme } from '@chakra-ui/react';
import { buttonTheme } from './custom';

const lightTheme = extendTheme({
  colors: {
    // Define light mode colors here
  },
  components: {
    Button: buttonTheme,
  },
});

export default lightTheme;
