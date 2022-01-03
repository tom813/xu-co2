import { Box, Flex, Heading, Img, Text, useColorModeValue } from "@chakra-ui/react"

const Card = ({ icon, title, description }) => {
    return (
        <Flex
            flexDirection="column"
            alignItems="center"
            borderRadius="45px"
            w="full"
            h="300px"
            bg={useColorModeValue('linear-gradient(145deg, #ffffff, #e6e6e6)', 'linear-gradient(145deg, #222225, #1d1d20)')}
            boxShadow={useColorModeValue('30px 30px 60px #d9d9d9, -30px -30px 60px #ffffff', '30px 30px 60px #1b1b1e, -30px -30px 60px #252528')}
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