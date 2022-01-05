import { Box, Container } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Box align="center" fontSize="sm" mt={5} mb={5} >
            &copy; {new Date().getFullYear()} TITLE. All Rights Reserved.
        </Box>
    )
}

export default Footer