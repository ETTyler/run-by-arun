import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: '#282b30',
        color: 'white',
      },
    },
  },
  colors: {
    black: '#16161D',
  },
  textStyles: {
    h1: {
      fontWeight: 'bold',
      lineHeight: '90%',
    },
  },
  fonts: {
    heading: `'Questrial', sans-serif`,
    body: `'Questrial', sans-serif`,
  },
})

export default theme