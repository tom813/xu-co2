import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import Card from "./card";

const AdvantagesSection = () => {
  return (
    <section
      style={{
        height: "fit-content",
        width: "100%",
        minWidth: "0",
        minHeight: "0",
      }}
    >
      <Flex
        w="full"
        h="60%"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        zIndex="2"
        p="20px"
      >
        <Heading fontSize={{ base: "24px", md: "28px", lg: "32px" }} mb="60px">
          Vorteile
        </Heading>
        <Flex
          h="300px"
          w="full"
          zIndex="2"
          flexWrap="wrap"
          justifyContent="center"
          flex="1 1"
          rowGap="60px"
          columnGap="20px"
        >
          <Card
            title="Alle Quellen"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia molestiae quibusdam esse eaque impedit a!"
            icon="/images/icons/computer-front-color.png"
          />
          <Card
            title="Alle Plattformen"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia molestiae quibusdam esse eaque impedit a!"
            icon="/images/icons/sheild-front-color.png"
          />
          <Card
            title="Alle Sprachen"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia molestiae quibusdam esse eaque impedit a!"
            icon="/images/icons/notify-heart-front-color.png"
          />
        </Flex>
      </Flex>
    </section>
  );
};

export default AdvantagesSection;
