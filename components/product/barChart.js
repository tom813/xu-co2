import { Box, useColorMode, useColorModeValue } from '@chakra-ui/react'

function BarChart({percantage, height, fontSize}){
    return(
        <>
            <Box 
                w="100%" 
                h={height == undefined ? '2rem': height} 
                bg="rgb(1, 22, 39)"
                /* colorScheme={useColorModeValue("purple", "orange")} */
                position="relative"
                borderRadius="50px"
                overflow="hidden"
            >
                <Box w={`${percantage}%`} h="inherit" bg={useColorModeValue("#805ad5", "#fbd38d")} zIndex="-1">

                </Box>
                <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" fontWeight="500"
                    color="white" fontSize={fontSize == undefined ? null : fontSize}
                >
                    {percantage}%
                </Box>
            </Box>
        </>
    )
}

export default BarChart