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

const components = {
    Text: {
        baseStyle: ({ colorMode }) => ({
            color: colorMode === 'dark' ? '#ddd' : '#888',
        }),
    },
    Button: {
        baseStyle: ({ colorMode }) => ({
            borderRadius: "14px",
            ":hover": {
                boxShadow: colorMode === "dark" ? "0px 4px 15px 5px #1b1b1e" : '0px 4px 15px 5px rgba(200,200,200,0.26)',
                transform: "translatey(-4px)"
            }
        }),
    },
}

const fonts = {
    heading: "Ubuntu",
    body: "Ubuntu"
}

const theme = extendTheme({
    config,
    styles,
    fonts,
    components
})

export default theme