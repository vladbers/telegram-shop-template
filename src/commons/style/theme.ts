import 'styled-components';

export interface StyleClosetTheme {
  colors: { [key in keyof typeof colors]: string };
  breakpoints: { [key in keyof typeof breakpoints]: string };
}

// Добавляем декларацию модуля для типизации styled-components
declare module 'styled-components' {
  export interface DefaultTheme extends StyleClosetTheme {}
}

const colors = {
  primary: '#1b1a20',
  secondary: 'green',
  black: '#0c0b10',
};

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1025px',
};

const theme: StyleClosetTheme = {
  colors,
  breakpoints,
};

export { theme };
