import { Mixins, mixins } from './mixins';
import { Breakpoints, breakpoints } from './themeValues';
import { Colors, colors } from './themeValues';
import { fontFamilies, FontFamilies } from './themeValues';

export type Theme = {
  breakpoints: Breakpoints;
  colors: Colors;
  fontFamilies: FontFamilies;
  mixins: Mixins;
};

export const theme: Theme = {
  breakpoints,
  colors,
  fontFamilies,
  mixins,
};
