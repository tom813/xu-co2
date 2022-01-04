import { Box, Flex, Heading, Img, Text, useColorModeValue } from "@chakra-ui/react"

const Card = ({ icon, title, description }) => {
    return (
        <Flex
            flexDirection="column"
            alignItems="center"
            borderRadius="50px"
            w="full"
            h="300px"
            boxShadow={useColorModeValue('20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;', '30px 30px 60px #1b1b1e, -30px -30px 60px #252528;')}
            p="20px"
        >
            <Img src={icon} flex={6} h="100px" />
            <Flex flex={3} alignItems="center">
                <Heading as="h3" fontSize="1.6rem">{title}</Heading>
            </Flex>
            <Box flex={3}>
                <Text textAlign="center">{description}</Text>
            </Box>
        </Flex>
    )
}

export default Card
