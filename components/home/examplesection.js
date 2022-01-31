import { Box, Button, Flex, Heading, Img, Text, useColorModeValue } from "@chakra-ui/react"
import DataExample from "../product/dataExample"

const ExampleSection = () => {
    return (
        <section style={{ height: "80vh", width: "100%" }}>
            <Flex
                h="full"
                w="full"
                justifyContent="center"
                alignItems="center"
            >
                <Flex alignItems="baseline" h="400px" w="full" justifyContent="space-between">
                    <Flex alignItems="flex-start" flexDirection="column" justifyContent="center" h="full" flex="0 0 45%">
                        <Heading as="h2" mb="15px" >Data examples</Heading>
                        <Text mb="30px">See how our data is structured and which information are included in the different datasets </Text>
                        <Button colorScheme={useColorModeValue('purple', 'orange')}>Go</Button>
                    </Flex>
                    <Box flex="1 0 55%">
                    <DataExample
                    
                    Code={{
                    Name: "Mustermann Limited",
                    Branch: "Dentist",
                    Adress: "Hauptstraße 42",
                    City: "Coruscant",
                    Phone: "0176 662607015",
                    Website: "www.localhost.com",
                    Email: "hmu@local.host"
                }} />
                    </Box>
                </Flex>
            </Flex>
        </section>
    )
}

export default ExampleSection