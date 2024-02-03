import { AppProps } from 'next/app'
import '../styles/index.css'

import { ThemeProvider } from "styled-components"

import THEME from 'styles/theme'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={THEME}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
