import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.scss'
import '../styles/card.scss'
import theme from "../lib/theme/theme"
import { AnimatePresence } from 'framer-motion'
import Layout from "../components/layout/main"
import Head from "next/head"

import "@fontsource/ubuntu"

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" /> */}
      </Head>
      <ChakraProvider theme={theme}>
        <Layout>
          <AnimatePresence exitBeforeEnter initial={true} >
            <Component {...pageProps} />
          </AnimatePresence>
        </Layout>
      </ChakraProvider>
    </>
  )
}

export default App
