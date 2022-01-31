import {
  Box,
  Button,
  Flex,
  Heading,
  Img,
  Text,
  useColorModeValue,
  useBreakpointValue,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import DataExample from "../product/dataExample";
import Link from "next/link";
import { useState } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await (
      await fetch("/api/subscribenewsletter", {
        method: "POST",
        body: JSON.stringify({
          email: email,
        }),
      })
    ).json();

    console.log(result);
  };

  return (
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
          w="full"
          flexDirection="column"
          alignItems="center"
          bg={useColorModeValue("#ffffff", "#202023")}
          boxShadow={useColorModeValue(
            "30px 30px 60px #d9d9d9, -30px -30px 60px #ffffff",
            "30px 30px 60px #1b1b1e, -30px -30px 60px #252528"
          )}
          p="20px"
          borderRadius="20px"
        >
          <Heading as="h2" mb="15px">
            Subscribe To The Newsletter
          </Heading>
          <Text>
            Click here to get notified about our latest updates via E-Mail
          </Text>
          <form>
            <Flex
              w={["250px", "300px", "350px"]}
              alignItems="flex-start"
              justifyContent="flex-start"
              mt="40px"
              flexDirection="column"
            >
              <FormControl>
                <FormLabel>E-Mail Address</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Input>
              </FormControl>
              <Button
                mt="20px"
                colorScheme={useColorModeValue("purple", "orange")}
                onClick={handleSubmit}
              >
                subscribe now
              </Button>
            </Flex>
          </form>
        </Flex>
      </Flex>
    </section>
  );
};

export default NewsletterSection;
