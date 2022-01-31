import Section from "../components/global/section";
import Layout from "../components/layout/article";
import { Flex } from "@chakra-ui/react";
import HookSection from "../components/home/hooksection";
import AdvantagesSection from "../components/home/advantagessection";
import ExampleSection from "../components/home/examplesection";
import ConversionSection from "../components/home/conversionsection";

const Home = () => {
  return (
    <Layout title="Homepage">
      <Flex w="100%" justifyContent="center" flexDirection="column">
        <Section delay={0.1}>
          <HookSection />
        </Section>

        {/* <ScrollAnimation animateIn="fadeInLeft" duration={0.4} delay={0.5}> */}
        <Section delay={0.2}>
          <AdvantagesSection />
        </Section>
        {/* </ScrollAnimation> */}

        <Section delay={0.3}>
          <ConversionSection />
        </Section>

        <Section delay={0.4}>
          <ExampleSection />
        </Section>
      </Flex>
    </Layout>
  );
};

export default Home;
