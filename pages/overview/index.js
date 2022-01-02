import {Image, Flex, Container, Text, Heading, Center, SimpleGrid} from '@chakra-ui/react';
import Card from '../../components/branches/card';
import Layout from '../../components/layout/article';
import Section from '../../components/global/section';

const Overview = () => {
  let cards = [];
  for(let i = 0; i < 6; i++){
    cards.push(<Card/>);
  }

  return (
    <Layout>
      <Section>
        <Heading>Branche Übersicht</Heading>
        <Flex>
          <Container>
            <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia molestiae quibusdam esse eaque impedit a! Enim reprehenderit debitis neque ullam!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quibusdam suscipit voluptatum accusamus aperiam quisquam error labore aspernatur nulla numquam?
            </Text>
          </Container>
          <Image src='https://via.placeholder.com/400x300'></Image>
        </Flex>
      </Section>

      <Section>
        <Center>
          <Heading>Overview</Heading>
        </Center>
        <SimpleGrid columns={3} spacing={10} mb='2em'>
          {cards}
        </SimpleGrid>
      </Section>

      <Section>
        <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias totam iure illum nemo assumenda. Non nemo fugiat id, ab at, enim illum temporibus in incidunt maxime repellendus neque quidem minima inventore quisquam voluptate. Odit repellat repellendus possimus quidem accusamus porro, voluptatum dolore quisquam ab, labore neque obcaecati doloribus laboriosam commodi alias tempora quos tempore reprehenderit necessitatibus dolorem quis earum atque minus! Ea magnam, perferendis voluptatem dolorum ipsa maxime. Dolorum totam optio architecto numquam tempore fuga autem libero at enim ipsum. Est nobis excepturi earum iusto voluptatem architecto quasi facilis possimus quis nam esse aperiam ipsa, cum numquam distinctio labore mollitia iste? Voluptates enim perferendis aliquid, optio minus ipsam saepe quo maiores consequuntur aliquam omnis vel odio ex odit minima cumque repellendus hic quidem neque corporis ullam molestiae tempora. Cupiditate consectetur libero ipsa consequuntur necessitatibus voluptatem eos et quaerat rem vero! Ab numquam sit magnam quod quaerat itaque consectetur recusandae autem molestias incidunt deserunt cupiditate totam odio repellendus odit consequuntur asperiores nulla amet nihil quos perspiciatis, facilis nostrum tenetur quibusdam? Sed, illum voluptatum et architecto ex cum commodi aliquid quibusdam, libero incidunt saepe sunt doloribus provident sit culpa est. Dicta distinctio accusamus hic qui maxime laborum. Eius deleniti quisquam voluptatum sapiente.</Text>
      </Section>
    </Layout>
  );
}

export default Overview
