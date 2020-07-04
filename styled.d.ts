// import original module declarations
import 'styled-components';
// import your custom theme
import theme from '@src/utils/theme';

// extend the module declarations using custom theme type

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
