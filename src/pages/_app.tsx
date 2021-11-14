import { NextPage } from 'next'
import { AppProps } from 'next/dist/shared/lib/router/router'
import { ChakraProvider } from '@chakra-ui/react'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
