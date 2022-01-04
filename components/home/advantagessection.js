import { Box, Flex, Grid, GridItem, Heading, SimpleGrid } from "@chakra-ui/react"
import Card from "./card"

const AdvantagesSection = () => {
    return (
        <section style={{
            minHeight: "95vh",
            height: "fit-content", width: "100%"
        }} >
            <Flex w="full" h="60%" justifyContent="center" alignItems="center" flexDirection="column" zIndex="2" p="20px">
                <Heading as="h2" mb="60px">Vorteile</Heading>
                <Flex h="300px" w="full" zIndex="2" flexWrap="wrap" justifyContent="center" rowGap="60px" columnGap="20px">
                    <Card title="Alle Quellen" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia molestiae quibusdam esse eaque impedit a!" icon="/images/icons/computer-front-color.png" />
                    <Card title="Alle Plattformen" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia molestiae quibusdam esse eaque impedit a!" icon="/images/icons/sheild-front-color.png" />
                    <Card title="Alle Sprachen" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia molestiae quibusdam esse eaque impedit a!" icon="/images/icons/notify-heart-front-color.png" />
                </Flex>
            </Flex>
        </section >
    )
}

export default AdvantagesSection