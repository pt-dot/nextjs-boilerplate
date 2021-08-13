export const colors = {
  primary: {
    900: '#610547',
    800: '#91086a',
    700: '#c10b8d',
    600: '#f10eb1',
    500: '#f43ec0',
    400: '#c91ec266',
    300: '#f76ed0',
    200: '#fa9ee0',
    100: '#ffe5f5',
  },
  gradient: {
    primary: `linear-gradient(
      to bottom,
      rgb(237, 40, 130) 0%,
      rgb(223, 2, 228) 99%
    )`,
    secondary: `linear-gradient(
      to bottom,
      #4B6B9B 0%,
      #0E141E 99%
    )`,
  },
};
export const breakpoints = {
  sm: '640px',
  // => @media (min-width: 640px) { ... }

  md: '768px',
  // => @media (min-width: 768px) { ... }

  lg: '1024px',
  // => @media (min-width: 1024px) { ... }

  xl: '1280px',
  // => @media (min-width: 1280px) { ... }

  xxl: '1536px',
};

export const mediaQueries = {
  sm: `@media screen and (min-width: ${breakpoints.sm})`,
  md: `@media screen and (min-width: ${breakpoints.md})`,
  lg: `@media screen and (min-width: ${breakpoints.lg})`,
  xl: `@media screen and (min-width: ${breakpoints.xl})`,
  xxl: `@media screen and (max-width: ${breakpoints.xxl})`,
};
