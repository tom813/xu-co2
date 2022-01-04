import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'
import theme from "../lib/theme/theme"
import { AnimatePresence } from 'framer-motion'
import Layout from "../components/layout/main"
import Head from "next/head"
import "@fontsource/ubuntu"
import { gsap } from "gsap/dist/gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


function App({ Component, pageProps }) {

  gsap.registerPlugin(ScrollTrigger);

  return (
    <>
      <Head>
        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
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
