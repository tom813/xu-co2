import { Box, Flex, Grid, GridItem, Heading } from "@chakra-ui/react"
import Card from "./card"

const AdvantagesSection = () => {
    return (
        <section style={{ height: "95vh", width: "100%" }}>
            <Flex w="full" h="full" justifyContent="center" alignItems="center" flexDirection="column">
                <Heading as="h2" mb="60px">Vorteile</Heading>
                <Grid templateColumns="repeat(6,1fr)" h="300px" w="full" columnGap="70px">
                    <GridItem colSpan={2}><Card title="Alle Quellen" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia molestiae quibusdam esse eaque impedit a!" icon="/images/icons/computer-front-color.png" /></GridItem>
                    <GridItem colSpan={2}><Card title="Alle Plattformen" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia molestiae quibusdam esse eaque impedit a!" icon="/images/icons/sheild-front-color.png" /></GridItem>
                    <GridItem colSpan={2}><Card title="Alle Sprachen" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia molestiae quibusdam esse eaque impedit a!" icon="/images/icons/notify-heart-front-color.png" /></GridItem>
                </Grid>
            </Flex>
        </section >
    )
}

export default AdvantagesSection