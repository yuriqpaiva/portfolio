import { extendTheme, Theme, DeepPartial } from '@chakra-ui/react';

const customTheme = {
  styles: {
    global: {
      body: {
        bg: 'brandBlue.900',
        color: '#ffffff',
        '&::-webkit-scrollbar': {
          width: '6px',
        },
        '&::-webkit-scrollbar-track': {
          width: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'gray.600',
          borderRadius: '24px',
        },
      },
    },
  },
  zIndices: {
    overlay: 100,
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
    brandRedOpacity: {
      500: 'rgb(233, 69, 96, 0.1)',
    },
    brandRed: {
      500: '#E94560',
    },
  },
} as DeepPartial<Theme>;

export const theme = extendTheme(customTheme);
