import {
    Container,
    Box,
    Heading,
    Image,
    Link,
    useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Section from '../components/section'
import Para from '../components/para'

const Page = () => {
    return (
        <Container>
            <Box
            borderRadius="lg"
            bg={useColorModeValue('#946bfa', '#946bfa')}
            p={3}
            mb={6}
            align="center"
            >
                hello ~ welcome to ashvin.codes!
            </Box>

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Ashvin Ramanathan
                    </Heading>
                <p>Internet Enthusiast [Student / Developer]</p>
                </Box>
                <Box
                flexShrink={0}
                mt={{ base: 4, md: 0 }}
                ml={{ md: 6 }}
                align="center"
                >
                    <Image
                    borderColor="whiteAlpha.800"
                    borderWidth={2}
                    borderStyle="solid"
                    maxWidth="100px"
                    display="inline-block"
                    borderRadius="full"
                    src="/images/ashvin.jpg"
                    alt="Profile Picture"
                    />
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    about
                </Heading>
                <Para>
                    Ashvin is a student at the University of Ottawa studying Computer Science. 
                    Looking for internship opportunities in the USA(Atlanta) and Canada(Ottawa).
                    You can find my recent work, posts, and other things ashvin on this site.
                    My most recent project is this website {' '}
                    <NextLink href="/works/ashvincodes">
                        <Link>
                            ashvin.codes 
                        </Link>
                    </NextLink>
                    ; built with Next.js, Chakra UI, Framer Motion, and Three.js. 
                </Para>
            </Section>
        </Container>
    )
}

export default Page