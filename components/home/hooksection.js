import {
  Box,
  Button,
  Flex,
  Heading,
  Img,
  SimpleGrid,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";

const HookSection = () => {
  return (
    <section>
      <Flex
        w="100%"
        // transform="translatey(-85px)"
        h="600px"
        justifyContent="center"
        alignItems="center"
        flexDirection={useBreakpointValue({ base: "column", md: "row" })}
      >
        <Flex
          flex={1}
          alignItems="flex-start"
          justifyContent="center"
          flexDirection="column"
          p="15px"
          transform="translatey(30px)"
          h="full"
          borderRadius="20px"
          order={useBreakpointValue({ base: "2", md: "1" })}
        >
          <Heading fontSize={{ base: "24px", md: "28px", lg: "32px" }}>
            Adressen Kaufen
          </Heading>
          <Text pl="2px">Lorem Ipsum..</Text>
          <Box mt="20px">
            <Link href="/overview">
              <Button
                colorScheme="telegram"
                _hover={{
                  boxShadow:
                    "0px 4px 15px 5px rgba(0, 136, 204, .2) !important",
                }}
              >
                Jetzt Kaufen
              </Button>
            </Link>
          </Box>
        </Flex>
        <Flex
          flex={1}
          order={useBreakpointValue({ base: "1", md: "2" })}
          w="full"
          // backdropFilter="blur(28px)"
          zIndex="2"
          borderRadius="20px"
          justifyContent="center"
          alignItems="center"
        >
          {/* <Img
            src="/images/illustrations/laptop-3d.png"
            zIndex="2"
            position="relative"
            width="350px"
            height="auto"
          /> */}
          {/* <LazyModel /> */}
        </Flex>
      </Flex>
    </section>
  );
};

export default HookSection;
