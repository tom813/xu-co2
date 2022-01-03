import Section from '../components/global/section'
import Layout from '../components/layout/article'
import { Box, Flex, Grid, GridItem, Heading, Img, Text } from "@chakra-ui/react"
import Image from 'next/image'

const Home = () => {
  return (
    <Layout title="Homepage">
      <Flex
        h="100vh"
        w="100%"
        justifyContent="center"
        alignItems="center"
      >
        <Section>
          <Flex
            w="full"
            h="600px"
            alignItems="center"
            justifyContent="space-between"
            transform="translatey(-65px)"
            borderRadius="20px"
            backdropFilter="blur(28px)" >
            <Flex
              alignItems="center"
              flexDirection="column"
            >
              <Heading as="h2">Adressen Kaufen</Heading>
              <Text>Lorem Ipsum..</Text>
            </Flex>
            <Img src="/images/illustrations/laptop-3d.png" width="600px" height="600px" transform="translatex(80px)" />
          </Flex>
        </Section>
      </Flex>
    </Layout>
  )
}

export default Home