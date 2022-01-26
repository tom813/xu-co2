import {useRouter} from 'next/router'
import dynamic from 'next/dynamic'
import { Box, Flex, Heading, Image, Text, Button, useColorModeValue,  useToast, StatGroup, Stat, StatLabel, StatNumber } from '@chakra-ui/react'
const Tabs = dynamic(import('@chakra-ui/react').then(mod => mod.Tabs), {ssr: false})
import { TabList, Tab, TabPanel, TabPanels} from '@chakra-ui/react'
import DataExample from '../components/product/dataExample'
import SubsetTable from '../components/product/subsetTable'
import BarChart from '../components/product/barChart'

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
    const coverages = [
        {name: 'Adress', percantage: branch[0].adress_coverage},
        {name: 'Phone', percantage: branch[0].phone_coverage},
        {name: 'Website', percantage: branch[0].website_coverage},
        {name: 'Email', percantage: branch[0].email_coverage},
    ]
    return (
        <Box w="100%" maxW="1400px" margin="0 auto" padding="0 2%">
            <Flex justifyContent="space-evenly" alignItems="center" gap="10%" wrap="wrap">
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
                <Heading as="h2">
                    Data coverage
                </Heading>
                {coverages.map((coverage) => {
                    return(
                        <Box key={coverage.name} m="2rem 0">
                            <Heading as="h4" fontSize="1.4rem" fontWeight="300" mb=".5rem">
                                {coverage.name} coverage
                            </Heading>
                            <BarChart percantage={coverage.percantage} />
                        </Box>
                    )
                })}
                
            </Box>

            <Box>
                <Heading mb="1rem">State subsets</Heading>
                <SubsetTable tableData={stateSubsets} />
            </Box>

            
            
            <Box m="50px 0">
                <Heading as="h2" mb="1rem">Legal information</Heading>
                <Tabs variant='soft-rounded' colorScheme={useColorModeValue("purple", "orange")}>
                    <TabList>
                        <Tab>Source of Data</Tab>
                        <Tab>Data Quality</Tab>
                        <Tab>Privacy</Tab>
                        <Tab></Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                        <p>
                            Here you can find information about the source of Data.
                            <br /><br />
                            This will contain information about the websites and the rules our scrapers are going through.
                            <br /><br />
                            If the data is available you'll find all information here.
                        </p>
                        </TabPanel>
                        <TabPanel>
                        <p>At the moment no data is available</p>
                        </TabPanel>
                        <TabPanel>
                            <p>
                                At the moment no data is available
                            </p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
            
        </Box>
    )
}

export default ProductPage