import {
  Box,
  Flex,
  Heading,
  Img,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";

const Card = ({ icon, title, description }, ...props) => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      borderRadius="10px"
      w="full"
      h="fit-content"
      boxShadow={useColorModeValue(
        "20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;",
        "30px 30px 60px #1b1b1e, -30px -30px 60px #252528;"
      )}
      p="20px"
      flex={useBreakpointValue({ base: 6, lg: 2 })}
      textAlign="center"
    >
      <Img src={icon} flex={1} w="100px" />
      <Flex flex={3} alignItems="center">
        <Heading as="h3" fontSize="1.6rem">
          {title}
        </Heading>
      </Flex>
      <Box flex={3}>
        <Text textAlign="center">{description}</Text>
      </Box>
    </Flex>
  );
};

export default Card;
