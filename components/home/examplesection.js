import {
  Box,
  Button,
  Flex,
  Heading,
  Img,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";

const ExampleSection = () => {
  return (
    <section>
      <Flex
        h="full"
        w="full"
        justifyContent="center"
        alignItems="center"
        p="20px"
      >
        <Flex
          alignItems="center"
          h="400px"
          justifyContent="space-between"
          flexDirection={useBreakpointValue({ base: "column", md: "row" })}
        >
          <Flex
            alignItems="flex-start"
            flexDirection="column"
            justifyContent="center"
            h="full"
            order={useBreakpointValue({ base: "2", md: "1" })}
          >
            <Heading
              fontSize={{ base: "24px", md: "28px", lg: "32px" }}
              mb="15px"
              mt={useBreakpointValue({ base: "20px", md: "0" })}
            >
              Konfiguration mit Code
            </Heading>
            <Text
              mb="30px"
              mr={useBreakpointValue({ base: "0px", md: "20px" })}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              molestiae quibusdam esse eaque impedit a!
            </Text>
            <Link href="/overview">
              <Button
                colorScheme="telegram"
                _hover={{
                  boxShadow:
                    "0px 4px 15px 5px rgba(0, 136, 204, .2) !important",
                }}
              >
                Leg Los
              </Button>
            </Link>
          </Flex>
          <Box
            bg="gray"
            w="full"
            h="full"
            borderRadius="xl"
            order={useBreakpointValue({ base: "1", md: "2" })}
          />
        </Flex>
      </Flex>
    </section>
  );
};

export default ExampleSection;
