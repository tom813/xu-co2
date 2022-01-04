import Head from "next/head"
import { Box, Container } from "@chakra-ui/react"
import Navbar from "../global/navbar"

const Layout = ({ children }) => {
    return (
        <Box as="main" display="flex" justifyContent="center">
            <Head>   {/*TODO: HEAD META */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Description" />
                <title>Title</title>
            </Head>

            <Navbar />

            <Container maxW="container.lg" m={0} mt="85px">

                {children}

                {/* TODO: FOOTER */}

            </Container>
        </Box>
    )
}

export default Layout