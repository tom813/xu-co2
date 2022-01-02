import { Box, Grid, GridItem, Flex, Button } from "@chakra-ui/react"
import Link from "next/link"

const Navbar = () => {
    return (
        <Box w="100vw" h="65px" position="fixed" zIndex="2" bg="white">
            <Grid templateColumns="repeat(6, 1fr)" w="100%" h="100%">
                <GridItem colSpan={3}>
                    <Flex justifyContent="flex-start" alignItems="center" h="100%" pl="50px">
                        <Link href="/">
                            <Button fontSize="1.5rem" _hover={{}} bg="transparent">
                                Adressen
                            </Button>
                        </Link>
                    </Flex>
                </GridItem>
                <GridItem colSpan={3}>
                    <Flex justifyContent="flex-end" alignItems="center" h="100%" pr="50px">
                        <Box>
                            <Link href="/overview">
                                <Button borderRadius="14px">
                                    Übersicht
                                </Button>
                            </Link>
                        </Box>
                    </Flex>
                </GridItem>
            </Grid>
        </Box>
    )
}

export default Navbar