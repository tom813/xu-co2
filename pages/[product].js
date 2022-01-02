import {useRouter} from 'next/router'
import { Box, Flex, Heading, Image, Text, Button, localStorageManager } from '@chakra-ui/react'

const sampleRequests = [
    {
        id: 1,
        name: 'dentist',
        num_of_entries: 222123,
        price: 1200
    },
    {
        id: 2,
        name: 'lawyer',
        num_of_entries: 123478,
        price: 900
    }
] 

export async function getStaticPaths(){
    var paths = []
    sampleRequests.map((sample) => (
        paths.push({params: {product: `${sample.id}`}})
    ))
    console.log(paths)
    return{
        paths: paths,
        fallback: false
    }
}

export async function getStaticProps(context){
    return{
        props: {productData: sampleRequests[parseInt(context.params.product) - 1]}
    }

}

const ProductPage = ({productData}) => {
    return (
        <Box w="100%" maxW="1400px" margin="0 auto" padding="0 2%">
            <Flex justifyContent="center" alignItems="center" gap="10%">
                <Box w="300px" height="300px" bgSize="cover" bgPosition="center" bgImage="https://www.address-base.de/images/product_images/info_images/Aemter-und-Behoerden_10_0.jpg" />
                <Flex flexDir="column" alignItems="stretch" justifyContent="space-between">
                    <Heading as="h1">
                        Dataset of {productData.name}s
                    </Heading>
                    <Text fontSize="xl">
                        Number of entries: {productData.num_of_entries}
                    </Text>
                    <Text fontSize="xl">
                        Price: €{productData.price}
                    </Text>
                    <Button>buy</Button>
                </Flex>
            </Flex>
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