import { Box, useColorMode, useColorModeValue } from '@chakra-ui/react'

function BarChart({percantage}){
    return(
        <>
            <Box 
                w="100%" 
                h="2rem" 
                bg="rgb(1, 22, 39)"
                /* colorScheme={useColorModeValue("purple", "orange")} */
                position="relative"
                borderRadius="50px"
                overflow="hidden"
            >
                <Box w={`${percantage}%`} h="inherit" bg={useColorModeValue("#805ad5", "#fbd38d")} zIndex="-1">

                </Box>
                <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" fontWeight="600"
                    color="white"
                >
                    {percantage}%
                </Box>
            </Box>
        </>
    )
}

export default BarChart