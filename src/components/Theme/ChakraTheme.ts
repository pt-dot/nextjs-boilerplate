import { extendTheme, ThemeConfig, ThemeOverride } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const colors = {
  colors: {
    brand: {
      50: '#fee4ff', // ghost hover bg
      100: '#ffb5f3',
      200: '#fa86e5',
      300: '#f656d3',
      400: '#f226bf',
      500: '#d90d9f',
      600: '#a90686', // outlined color
      700: '#790269',
      800: '#4b0045',
      900: '#1d001d',
    },
    gray: {
      900: '#090d13',
    },
    gradient: {
      primary: `linear-gradient(
        to bottom,
        #ED2882 0%,
        #DF02E4 99%
      )`,
      primaryDark: `linear-gradient(
        to bottom,
        #790474 0%,
        #090D13 99%
      )`,
      secondary: `linear-gradient(
        to bottom,
        #4B6B9B 0%,
        #0E141E 99%
      )`,
    },
    backgorund: 'white',
  },
};

type CustomColors = typeof colors;

const theme = extendTheme(<ThemeOverride>{
  colors: { ...colors.colors },
  styles: {
    global: (props) => ({
      body: {
        bg: mode('gray.100', 'gray.800')(props),
        overflowY: 'scroll',

        MozOsxFontSmoothing: 'grayscale',
        WebkitFontSmoothing: 'antialiased',
        textRendering: 'optimizeLegibility',
      },
      html: {
        scrollBehavior: 'smooth',
      },
    }),
  },
  fonts: {
    heading: `Montserrat, sans-serif`,
    body: `Roboto Mono, monospace`,
  },
  components: {
    Button: {
      baseStyle: {
        fontFamily: `Montserrat, sans-serif`,
        fontWeight: 'bold',
        rounded: 'full',
      },
      variants: {
        outline: ({ colorMode }) => ({
          borderWidth: 2,
          borderColor: colorMode === 'dark' ? 'brand.300' : 'brand.400',
          color: colorMode === 'dark' ? 'brand.200' : 'brand.500',
        }),
      },
      defaultProps: {
        colorScheme: 'brand',
      },
    },
    Text: {
      baseStyle: {
        letterSpacing: 'tight',
      },
    },
    Card: {
      baseStyle: ({ colorMode }) => ({
        backgroundColor: colorMode === 'dark' ? 'gray.900' : 'white',
        borderRadius: 'xl',
      }),
    },
    Progress: {
      variants: {
        primary: {
          bg: 'gradient.primary',
        },
      },
    },
  },
  config,
});
type CustomTheme = typeof theme & CustomColors;
export type { CustomTheme };
export { theme };
