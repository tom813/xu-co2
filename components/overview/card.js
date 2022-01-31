import { Box, Image, Flex, Badge, Tag, TagLabel, TagLeftIcon } from '@chakra-ui/react';
import { AtSignIcon, PhoneIcon, EmailIcon, CalendarIcon } from '@chakra-ui/icons'
import BarChart from '../product/barChart';



function Card({branchData}){
  return (
    <Box maxW='md' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Flex w="100%" justifyContent="center" alignItems="center" position="relative">
            <Image src="/images/icons/folder-dynamic-color.png" alt="" w="200px" />
            
        </Flex>
      

      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2'>
          {branchData.num_of_entries} entries
          </Badge>
          
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          isTruncated
          fontSize="1.5rem"
        >
          {branchData.name}
        </Box>

        <Box mb=".3rem">
          €{branchData.price}
          <Box as='span' color='gray.600' fontSize='sm'>
            
          </Box>
        </Box>
        <Flex justifyContent="space-between" wrap="wrap">
            <Tag size='lg' variant='subtle'>
                <TagLeftIcon as={EmailIcon} />
                <TagLabel>
                    {branchData.email_coverage}%
                </TagLabel>
            </Tag>
            <Tag size='lg' variant='subtle'>
                <TagLeftIcon as={CalendarIcon} />
                <TagLabel>
                    {branchData.adress_coverage}%
                </TagLabel>
            </Tag>
            <Tag size='lg' variant='subtle'>
                <TagLeftIcon as={PhoneIcon} />
                <TagLabel>
                    {branchData.phone_coverage}%
                </TagLabel>
            </Tag>
            
        </Flex>

        
      </Box>
    </Box>
  );
}

export default Card
