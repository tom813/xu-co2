import Section from '../components/global/section'
import Layout from '../components/layout/article'
import { Flex, Heading, Box } from "@chakra-ui/react"
import HookSection from '../components/home/hooksection'
import AdvantagesSection from '../components/home/advantagessection'
import ExampleSection from '../components/home/examplesection'
import BarChart from '../components/product/barChart'


const Home = () => {
  return (
    <Layout title="Homepage">
      <Flex
        w="100%"
        justifyContent="center"
        flexDirection="column"
      >

        <Section delay={0.1}>
          <HookSection />
        </Section>

        {/* <ScrollAnimation animateIn="fadeInLeft" duration={0.4} delay={0.5}> */}
        <Section>
          <AdvantagesSection />
        </Section>
        {/* </ScrollAnimation> */}

        <Section>
          <ExampleSection />
        </Section>

        <Section>
        <Heading>Statistics</Heading>
        <Box mt="1rem">
          <Heading as="h2" size="md" fontWeight="300" mb="10px">
            More knowledge about customers
          </Heading>
          <BarChart percantage={90} />
        </Box>
        <Box mt="1rem">
          <Heading as="h2" size="md" fontWeight="300" mb="10px">
            Better communication
          </Heading>
          <BarChart percantage={80} />
        </Box>
        <Box mt="1rem">
          <Heading as="h2" size="md" fontWeight="300" mb="10px">
            More reachability
          </Heading>
          <BarChart percantage={34} />
        </Box>
        <Box mt="1rem">
          <Heading as="h2" size="md" fontWeight="300" mb="10px">
            Less costs
          </Heading>
          <BarChart percantage={99} />
        </Box>
        

      </Section>
      </Flex>
    </Layout >
  )
}

export default Home
