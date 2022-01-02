import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'
import theme from "../lib/theme/theme"
import { AnimatePresence } from 'framer-motion'
import Layout from "../components/layout/main"
import Head from "next/head"

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* TODO: APP META HEAD */}
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
