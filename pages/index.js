import Section from '../components/global/section'
import Layout from '../components/layout/article'
import { Flex } from "@chakra-ui/react"

const Home = () => {
  return (
    <Layout title="Homepage">
      <Flex
        h="100vh"
        w="100vw"
        justifyContent="center"
        alignItems="center"
      >
        <Section>

        </Section>
      </Flex>
    </Layout>
  )
}

export default Home