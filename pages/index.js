import Section from '../components/global/section'
import Layout from '../components/layout/article'
import { Box, Heading } from "@chakra-ui/react"

const Home = () => {
  return (
    <Layout title="Homepage">
      <Box
        h="100vh"
        w="100%"
      >
        <Section>
          <Heading as="h1">Was geht ab</Heading>
          <Box w="100%" h="200px" bg="blue"></Box>
        </Section>
      </Box>
    </Layout>
  )
}

export default Home