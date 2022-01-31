import {
  Box,
  Button,
  Flex,
  Heading,
  Img,
  Text,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import DataExample from "../product/dataExample";
import Link from "next/link";

const ExampleSection = () => {
  return (
    // <section style={{ height: "80vh", width: "100%" }}>
    //   <Flex h="full" w="full" justifyContent="center" alignItems="center">
    //     <Flex
    //       alignItems="baseline"
    //       h="400px"
    //       w="full"
    //       justifyContent="space-between"
    //       flexWrap="wrap"
    //     >
    //       <Flex
    //         alignItems="flex-start"
    //         flexDirection="column"
    //         justifyContent="center"
    //         h="full"
    //         flex="0 0 45%"
    //       >
    //         <Heading as="h2" mb="15px">
    //           Data examples
    //         </Heading>
    //         <Text mb="30px">
    //           See how our data is structured and which information are included
    //           in the different datasets{" "}
    //         </Text>
    //         <Button colorScheme={useColorModeValue("purple", "orange")}>
    //           Go
    //         </Button>
    //       </Flex>
    //       <Box flex="1 0 55%">
    //         <DataExample
    //           Code={{
    //             Name: "Mustermann Limited",
    //             Branch: "Dentist",
    //             Adress: "Hauptstraße 42",
    //             City: "Coruscant",
    //             Phone: "0176 662607015",
    //             Website: "www.localhost.com",
    //             Email: "hmu@local.host",
    //           }}
    //         />
    //       </Box>
    //     </Flex>
    //   </Flex>
    // </section>
    <section>
      <Flex
        h="full"
        w="full"
        justifyContent="center"
        alignItems="center"
        p="20px"
        mb="80px"
        mt="40px"
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
            p="10px"
          >
            <Heading as="h2" mb="15px">
              Data examples
            </Heading>
            <Text mb="30px">
              See how our data is structured and which information are included
              in the different datasets{" "}
            </Text>

            <Link href="/overview">
              <Button colorScheme={useColorModeValue("purple", "orange")}>
                go
              </Button>
            </Link>
          </Flex>
          <Flex
            mb="20px"
            w="full"
            h="full"
            borderRadius="xl"
            order={useBreakpointValue({ base: "1", md: "2" })}
            justifyContent="center"
            alignItems="center"
          >
            <DataExample
              Code={{
                Name: "Mustermann Limited",
                Branch: "Dentist",
                Adress: "Hauptstraße 42",
                City: "Coruscant",
                Phone: "0176 662607015",
                Website: "www.localhost.com",
                Email: "hmu@local.host",
              }}
            />
          </Flex>
        </Flex>
      </Flex>
    </section>
  );
};

export default ExampleSection;
