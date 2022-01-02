import Head from "next/head"
import { Box, Container } from "@chakra-ui/react"

const Layout = ({ children }) => {
    return (
        <Box as="main" display="flex" justifyContent="center">
            <Head>   {/*TODO: HEAD META */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Description" />
                <title>Title</title>
            </Head>

            {/* TODO: NAVBAR */}

            <Container maxW="container.md" m={0}>

                {children}

                {/* TODO: FOOTER */}

            </Container>
        </Box>
    )
}

export default Layout