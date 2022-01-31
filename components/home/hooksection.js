import {
  Flex,
  Heading,
  Img,
  Text,
  Box,
  useBreakpointValue,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

import Link from "next/link";

const HookSection = () => {
  return (
    <section>
      {/* <Flex
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
            </Flex> */}
      <Flex
        w="100%"
        // transform="translatey(-85px)"
        h="600px"
        justifyContent="center"
        alignItems="center"
        flexDirection={useBreakpointValue({ base: "column", md: "row" })}
        flex="1 1"
        flexWrap="wrap"
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
            buy addresses
          </Heading>
          <Text pl="2px">fast and save</Text>
          <Box mt="20px">
            <Link href="/overview">
              <Button colorScheme={useColorModeValue("purple", "orange")}>
                buy now
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
          alignItems="center"
        >
          <Img src="/images/illustrations/laptop-3d.png" zIndex="1" />
        </Flex>
      </Flex>
    </section>
  );
};

export default HookSection;
