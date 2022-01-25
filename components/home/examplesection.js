import { Box, Button, Flex, Heading, Img, Text, useColorModeValue } from "@chakra-ui/react"

const ExampleSection = () => {
    return (
        <section style={{ height: "80vh", width: "100%" }}>
            <Flex
                h="full"
                w="full"
                justifyContent="center"
                alignItems="center"
            >
                <Flex alignItems="center" h="400px" w="full" justifyContent="space-between">
                    <Flex alignItems="flex-start" flexDirection="column" justifyContent="center" h="full">
                        <Heading as="h2" mb="15px" >Konfiguration mit Code</Heading>
                        <Text mb="30px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia molestiae quibusdam esse eaque impedit a!</Text>
                        <Button colorScheme={useColorModeValue('purple', 'orange')}>Los</Button>
                    </Flex>
                    <Box bg="gray" w="full" h="full" borderRadius="xl" />
                </Flex>
            </Flex>
        </section>
    )
}

export default ExampleSection