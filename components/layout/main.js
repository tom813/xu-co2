import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "../global/navbar";
import Footer from "../global/footer";

import dynamic from "next/dynamic";
import WorldLoader from "../home/world-model-loader";

const LazyModel = dynamic(() => import("../home/world-model"), {
  ssr: false,
  loading: () => <WorldLoader />,
});

const Layout = ({ children }) => {
  return (
    <Box as="main" display="flex" justifyContent="center">
      <Head>
        {" "}
        {/*TODO: HEAD META */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Description" />
        <title>Title</title>
      </Head>

      <Navbar />

      <LazyModel />

      <Container maxW="container.lg" m={0} mt="85px" zIndex="2">
        {children}

        <Footer />
      </Container>
    </Box>
  );
};

export default Layout;
