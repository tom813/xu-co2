import {Image, Flex, Box, Text, Heading, Center, SimpleGrid, Link} from '@chakra-ui/react';
import Card from '../../components/overview/card';
import Layout from '../../components/layout/article';
import Section from '../../components/global/section';
import BarChart from '../../components/product/barChart';


export async function getStaticProps(){
  var branches = await fetch(`http://localhost:3000/api/allbranches`)
  branches = await branches.json()
  return{
      props: {
              branches: branches
          }
  }

}

const Overview = ({branches}) => {
  /* let cards = [];
  for(let i = 0; i < 6; i++){
    cards.push(<Card key={i} icon={'/images/icons/sheild-front-color.png'} title={'Lorem ipsum'} description={'lLorem ipsum dolor sit amet consectetur adipiLorem ipsum dolor sit amet consectetur adipiorem'}/>);
  } */

  return (
    <Layout>
      <Section>
        <Heading>Branche overview</Heading>
        <Flex flexDirection={'row'}>
          <Box flex={2}>
            <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia molestiae quibusdam esse eaque impedit a! Enim reprehenderit debitis neque ullam!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quibusdam suscipit voluptatum accusamus aperiam quisquam error labore aspernatur nulla numquam?
            </Text>
          </Box>
          <Box flex={1}>
            <Image src="/images/icons/book-color.png"></Image>
          </Box>
        </Flex>
      </Section>

      <Section>
        <Center mb={8}>
          <Heading>Overview</Heading>
        </Center>

        
        <SimpleGrid columns={3} spacing={5} mb='5em'>
          
          {branches.map((branch) => {
            return(
              <Link key={branch.name} href={`/${branch.name}`} textDecoration="none" _hover={{textDecoration: 'none', transform: 'scale(1.1)'}}>
                <Card branchData={branch} textDecoration="none" />
              </Link>
            )
          })}
        </SimpleGrid>
      </Section>

      <Section>
        <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias totam iure illum nemo assumenda. Non nemo fugiat id, ab at, enim illum temporibus in incidunt maxime repellendus neque quidem minima inventore quisquam voluptate. Odit repellat repellendus possimus quidem accusamus porro, voluptatum dolore quisquam ab, labore neque obcaecati doloribus laboriosam commodi alias tempora quos tempore reprehenderit necessitatibus dolorem quis earum atque minus! Ea magnam, perferendis voluptatem dolorum ipsa maxime. Dolorum totam optio architecto numquam tempore fuga autem libero at enim ipsum. Est nobis excepturi earum iusto voluptatem architecto quasi facilis possimus quis nam esse aperiam ipsa, cum numquam distinctio labore mollitia iste? Voluptates enim perferendis aliquid, optio minus ipsam saepe quo maiores consequuntur aliquam omnis vel odio ex odit minima cumque repellendus hic quidem neque corporis ullam molestiae tempora. Cupiditate consectetur libero ipsa consequuntur necessitatibus voluptatem eos et quaerat rem vero! Ab numquam sit magnam quod quaerat itaque consectetur recusandae autem molestias incidunt deserunt cupiditate totam odio repellendus odit consequuntur asperiores nulla amet nihil quos perspiciatis, facilis nostrum tenetur quibusdam? Sed, illum voluptatum et architecto ex cum commodi aliquid quibusdam, libero incidunt saepe sunt doloribus provident sit culpa est. Dicta distinctio accusamus hic qui maxime laborum. Eius deleniti quisquam voluptatum sapiente.</Text>
      </Section>

      
    </Layout>
  );
}

export default Overview
