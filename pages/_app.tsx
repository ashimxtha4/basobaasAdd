import '../styles/globals.css'
import basicDetai from '../styles/basicDetail.module.css'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
