import { Flex, Heading, Img, Text } from "@chakra-ui/react"

const HookSection = () => {
    return (
        <section>
            <Flex
                w="full"
                h="91vh"
                alignItems="center"
                justifyContent="space-between"
                transform="translatey(-65px)"
                borderRadius="20px"
                backdropFilter="blur(28px)" >
                <Flex
                    alignItems="center"
                    flexDirection="column"
                >
                    <Heading as="h2">buy adresses</Heading>
                    <Text>fast and save</Text>
                </Flex>
                <Img src="/images/illustrations/laptop-3d.png" width="600px" height="600px" transform="translatex(80px)" />
            </Flex>
        </section>
    )
}

export default HookSection