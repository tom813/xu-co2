import { Box, Flex, Heading, Img, Text } from "@chakra-ui/react"

const HookSection = () => {
    return (
        <section>
            <Flex
                w="full"
                h="91vh"
                alignItems="center"
                justifyContent="space-between"
                transform="translatey(-85px)"
            // _after={{
            //     content: '""',
            //     position: 'absolute',
            //     transform: "translate(-20px, 60px)",
            //     width: "360px",
            //     height: "200px",
            //     borderRadius: "0px 20px 0px 20px",
            //     background: "linear-gradient(45deg, rgba(136,139,244,1) 0%, rgba(198,81,156,1) 100%)",
            //     zIndex: "1"
            // }}
            >
                <Flex
                    alignItems="center"
                    flexDirection="column"
                    p="20px"
                    borderRadius="20px"
                    backdropFilter="blur(28px)"
                    bg="whiteAlpha.400"
                    zIndex="2"
                >
                    <Heading as="h2">Adressen Kaufen</Heading>
                    <Text>Lorem Ipsum..</Text>
                </Flex>
                <Img src="/images/illustrations/chart-iso-color.png" width="350px" height="auto" transform="translatex(0px)" />

            </Flex>
        </section>
    )
}

export default HookSection