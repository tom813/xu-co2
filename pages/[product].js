import {useRouter} from 'next/router'

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
        <div>
            Name: {productData.name}
        </div>
    )
}

export default ProductPage