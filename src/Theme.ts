import { DefaultTheme } from "styled-components"


declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string,
    colors: {
      primary: string,
      secondary: string,
      white: string
    }
  }
}

export const Theme: DefaultTheme = {
  borderRadius: '6px',

  colors: {
    primary: '#1890ff',
    secondary: 'rgba(0, 0, 0, .65)',
    white: '#fff',
  }
}
