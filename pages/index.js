import Section from '../components/global/section'
import Layout from '../components/layout/article'
import { Flex, Heading } from "@chakra-ui/react"

const Home = () => {
  return (
    <Layout title="Homepage">
      <Flex
        h="100vh"
        w="100vw"
        justifyContent="center"
        alignItems="center"
        bg="blue"
      >
        <Section>
          <Heading as="h1">Was geht ab</Heading>
        </Section>
      </Flex>
    </Layout>
  )
}

export default Home