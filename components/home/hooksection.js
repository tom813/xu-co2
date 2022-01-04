import { Box, Flex, Heading, Img, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react"
import { useRef, useEffect } from "react"
import { gsap } from "gsap/dist/gsap"

import { Row, Col } from "react-bootstrap"

const HookSection = () => {

    const gradientRef = useRef()
    const sectionRef = useRef()

    useEffect(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "-10%",
                end: "bottom 50%",
                scrub: 1,
                snap: {
                    snapTo: "labels", // snap to the closest label in the timeline
                    duration: { min: 1, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
                    delay: 0.3, // wait 0.2 seconds from the last scroll event before doing the snapping
                    ease: "power1" // the ease of the snap animation ("power3" by default)
                }
            }
        })

        tl.addLabel("start")
            .to(gradientRef.current, { rotate: 20 })
            .addLabel('end');

        // gsap.to(gradientRef.current, {
        //     scrollTrigger: "#hooksection",
        //     x: 500
        // })
    })

    return (
        <section ref={sectionRef}>
            < SimpleGrid
                w="100%"
                h="91vh"
                // transform="translatey(-85px)"
                justifyContent="center"
                alignItems="center"
                minChildWidth="400px"
            >
                <Flex
                    alignItems="flex-start"
                    justifyContent="center"
                    flexDirection="column"
                    p="15px"
                    w="400px"
                    borderRadius="20px"
                    zIndex="2"
                    position="relative"
                >
                    <Heading as="h2">Adressen Kaufen</Heading>
                    <Text>Lorem Ipsum..</Text>
                </Flex>
                <Flex position="relative" justifyContent="center" alignItems="center">
                    <Flex h={[350, 400]} w={[350, 400]} backdropFilter="blur(28px)" zIndex="2" borderRadius="20px" justifyContent="center" alignItems="center">
                        <Img src="/images/illustrations/map-pin-iso-clay.png" zIndex="2" position="relative" width="350px" height="auto" />
                    </Flex>
                    <Box h={[350, 400]} w={[350, 400]} top="50%" left="50%" transform="translate(-50%, -50%)" zIndex="1" borderRadius="20px" overflow="hidden" position="absolute">
                        <Img src="/images/illustrations/gradients/gradient-mesh.jpg" transform="scale(1.4) translatey(30px) rotate(-10deg)" filter='saturate(2)' ref={gradientRef} />
                    </Box>
                </Flex>

            </SimpleGrid >
        </section >
    )
}

export default HookSection