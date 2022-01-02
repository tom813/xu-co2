import { Box, Heading, Image, Text } from '@chakra-ui/react';

function Card(){
  return (
    <Box maxW='300px' p={10} border='1px solid' borderColor='gray.200'>
      <Image src='https://via.placeholder.com/200x100'></Image>
      <Heading fontSize='large'>
        Card Header
      </Heading>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, deleniti.
      </Text>
    </Box>
  );
}

export default Card;
