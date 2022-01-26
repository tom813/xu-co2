import {useRouter} from 'next/router'
import { Box, Flex, Heading, Image, Text, Button, useColorModeValue, Tabs, TabList, Tab, TabPanel, TabPanels, useToast, StatGroup, Stat, StatLabel, StatNumber } from '@chakra-ui/react'
import DataExample from '../components/product/dataExample'
import SubsetTable from '../components/product/subsetTable'

const tableSampleData = [

]
const sampleStateSubset = [
    {
        id: 1, 
        subsetOf: 'dentist',
        state: 'Berlin',
        num_of_entries: 123,
        price: 300
    }
]

export async function getStaticPaths(){
    const res = await fetch('http://localhost:3000/api/allbranches')
    const data = await res.json()
    console.log(data)

    var paths = []
    data.map((sample) => (
        paths.push({params: {product: `${sample.name}`}})
    ))

    return{
        paths: paths,
        fallback: false
    }
}

export async function getStaticProps(context){
    var stateSubsets = await fetch('http://localhost:3000/api/stateSubsets')
    stateSubsets = await stateSubsets.json()
    var branch = await fetch(`http://localhost:3000/api/branch/${context.params.product}`)
    branch = await branch.json()
    return{
        props: {
                productData: context.params, 
                stateSubsets: stateSubsets,
                branch: branch
            }
    }

}


const ProductPage = ({productData, stateSubsets, branch}) => {
    const toast = useToast()
    return (
        <Box w="100%" maxW="1400px" margin="0 auto" padding="0 2%">
            <Flex justifyContent="space-evenly" alignItems="center" gap="10%">
                <Box w="300px" height="300px" bgSize="cover" bgPosition="center" bgImage="/images/icons/fav-folder-dynamic-color.png" />
                <Flex flexDir="column" alignItems="stretch" justifyContent="space-between" gap="10px">
                    <Heading as="h1">
                        Dataset of {productData.product}s
                    </Heading>
                    
                    <StatGroup m="1rem 0">
                    <Stat>
                        <StatLabel>Price</StatLabel>
                        <StatNumber>
                            €{branch[0].price}
                        </StatNumber>
                        
                    </Stat>

                    <Stat>
                        <StatLabel>Number of entries</StatLabel>
                        <StatNumber>
                            {branch[0].num_of_entries}
                        </StatNumber>
                        
                    </Stat>
                    </StatGroup>
                    <Flex flexDir="column" gap="10px">
                        <Button colorScheme={useColorModeValue("purple", "orange")}>buy</Button>
                        <Button 
                            as="a"
                            href="/downloads/example.csv"
                            download
                            colorScheme={useColorModeValue("purple", "orange")}
                            onClick={() =>
                                toast({
                                  title: 'Download successfull.',
                                  status: 'success',
                                  duration: 2000,
                                  isClosable: true,
                                })
                              }
                        >download example</Button>
                    </Flex>
                    
                </Flex>
            </Flex>
            <Box m="50px 0">
                <Heading mb="1rem">Example Data</Heading>
                <DataExample Code={{
                    Name: "Mustermann Limited",
                    Branch: "Dentist",
                    Adress: "Hauptstraße 42",
                    City: "Coruscant",
                    Phone: "0176 662607015",
                    Website: "www.localhost.com",
                    Email: "hmu@local.host"
                }} />

                
            </Box>
            <Box>
                <Heading mb="1rem">State subsets</Heading>
                <SubsetTable tableData={stateSubsets} />
            </Box>
            
            <Box m="50px 0">
                <Heading as="h2" mb="1rem">Data consists of subsets</Heading>
                <Tabs variant='soft-rounded' colorScheme={useColorModeValue("purple", "orange")}>
                    <TabList>
                        <Tab>Dentists Berlin</Tab>
                        <Tab>Dentists Hamburg</Tab>
                        <Tab>Dentists Brandenburg</Tab>
                        <Tab></Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                        <p>one!</p>
                        </TabPanel>
                        <TabPanel>
                        <p>two!</p>
                        </TabPanel>
                        <TabPanel>
                            <p>
                                wow
                            </p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
            <Box>
                <Heading>information about the data</Heading>
                <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
                </Text>
            </Box>
            <Box>
                <Heading>Legal information</Heading>
                <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
                </Text>
            </Box>
        </Box>
    )
}

export default ProductPage