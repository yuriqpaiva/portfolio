import { extendTheme, Theme, DeepPartial } from '@chakra-ui/react';

const customTheme = {
  styles: {
    global: {
      body: {
        bg: 'brandBlue.900',
        color: '#ffffff',
      },
    },
  },
  fonts: {
    heading: 'Source Sans Pro',
    body: 'Source Sans Pro',
  },
  colors: {
    brandBlue: {
      900: '#1A1A2E',
      800: '#16213E',
      700: '#0F3460',
    },
    brandRed: {
      500: '#E94560',
    },
  },
} as DeepPartial<Theme>;

export const theme = extendTheme(customTheme);
