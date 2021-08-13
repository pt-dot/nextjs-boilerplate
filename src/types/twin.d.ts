import 'twin.macro';
import styledImport from '@emotion/styled';
import { css as cssImport } from '@emotion/react';
import { CustomTheme } from 'components/Theme/ChakraTheme';

declare module 'twin.macro' {
  // The styled and css imports
  const styled: typeof styledImport;
  const css: typeof cssImport;

}

declare module '@emotion/react' {
  export interface Theme extends CustomTheme { }
}