import { color, extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}

const styles = {
    global: props => ({
        body: {
            bg: mode('#fff', '#202023')(props),
            color: mode('#444', '#fff')(props)
        },
        html: {
            bg: mode('#fff', '#202023')(props)
        }
    })
}

const fonts = {
    heading: "Ubuntu",
    body: "Ubuntu"
}

const theme = extendTheme({
    config,
    styles,
    fonts
})

export default theme