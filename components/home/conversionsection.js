import {
  Heading,
  Flex,
  useColorModeValue,
  Text,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";

const ConversionSection = () => {
  return (
    <section>
      <Flex justifyContent="center" alignItems="center" w="full">
        <Flex
          w="100%"
          h="300px"
          bg={useColorModeValue("#ffffff", "#202023")}
          boxShadow={useColorModeValue(
            "30px 30px 60px #d9d9d9, -30px -30px 60px #ffffff",
            "30px 30px 60px #1b1b1e, -30px -30px 60px #252528"
          )}
          borderRadius="45px"
          alignItems={useBreakpointValue({ base: "flex-start", md: "center" })}
          p="40px"
          flexDirection="column"
        >
          <Heading fontSize={{ base: "24px", md: "28px", lg: "32px" }} flex={3}>
            Growth Facilitator, Profit Generator
          </Heading>
          <Text flex={4} textAlign="center">
            Lorem Ipsum
          </Text>
          <Flex flex={1} justifyContent="flex-end" alignItems="center" w="full">
            <Link href="/overview">
              <Button
                _hover={{
                  boxShadow:
                    "0px 4px 15px 5px rgba(0, 136, 204, .2) !important",
                }}
                colorScheme="telegram"
              >
                Jetzt Kaufen
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </section>
  );
};

export default ConversionSection;
