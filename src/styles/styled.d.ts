/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';

import defaultTheme from './themes/default';

export type Theme = typeof defaultTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
