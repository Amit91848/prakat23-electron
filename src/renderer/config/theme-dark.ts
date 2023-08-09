import { extendTheme } from '@chakra-ui/react';
import { buttonTheme } from './custom';

const darkTheme = extendTheme({
  colors: {
    // Define dark mode colors here
  },
  components: {
    Button: buttonTheme,
  },
});

export default darkTheme;
