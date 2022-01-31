import {
  Box,
  Grid,
  GridItem,
  Flex,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggleButton from "./theme-toggle-button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const callhook = false;

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);

  const onScroll = () => {
    if (window.scrollY >= 20 && !callhook) {
      callhook = true;
      setScrolled(true);
    } else if (window.scrollY < 20 && callhook) {
      callhook = false;
      setScrolled(false);
    }
  };

  const bs = useColorModeValue(
    "0px 0px 35px 5px rgba(200,200,200,0.26)",
    "0px 0px 35px 5px #1b1b1e"
  );

  return (
    <Box
      w="100vw"
      h="85px"
      position="fixed"
      zIndex="3"
      bg={useColorModeValue("#fff", "#202023")}
      boxShadow={scrolled ? bs : "none"}
      transform={scrolled ? "scale(1.003)" : "none"}
      transition="400ms ease"
    >
      <Grid templateColumns="repeat(6, 1fr)" w="100%" h="100%">
        <GridItem colSpan={3}>
          <Flex
            justifyContent="flex-start"
            alignItems="center"
            h="100%"
            pl="50px"
          >
            <Link href="/">
              <Button
                fontSize="1.5rem"
                _hover={{
                  transform: "none !important",
                  boxShadow: "none !important",
                }}
                _active={{}}
                bg="transparent"
              >
                Adresses
              </Button>
            </Link>
          </Flex>
        </GridItem>
        <GridItem colSpan={3}>
          <Flex
            justifyContent="flex-end"
            alignItems="center"
            h="100%"
            pr="50px"
          >
            <Box mr="10px">
              <Link href="/overview">
                <Button letterSpacing="1px" transition="200ms ease">
                  overview
                </Button>
              </Link>
            </Box>
            <ThemeToggleButton />
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Navbar;
