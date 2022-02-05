import {
    Container,
    Button,
    Box,
    Heading,
    Image,
    Link,
    useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import Section from '../components/section'
import Para from '../components/para'
import { NoteSectionYear , NoteSectionYearYR } from '../components/yearsection'

const Page = () => {
    return (
        <Container>
            <Box
            borderRadius="lg"
            bg={useColorModeValue('#40b7f7', '#946bfa')}
            p={3}
            mb={6}
            align="center"
            >
                welcome to ashvin.codes! - text spacing messed up lol?
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
                    Student at the University of Ottawa studying Computer Science, looking for internship
                    opportunities in USA(Atlanta) or Canada(Ottawa).
                    My most recent project is this website {' '}
                    <NextLink href="/works/ashvincodes">
                        <Link>
                            ashvin.codes 
                        </Link>
                    </NextLink>
                    ; built with Next.js, Chakra UI, Framer Motion, and Three.js. 
                </Para>
                <Box align="center" my={4}>
                    <NextLink href="/work">
                        <Button rightIcon={<ChevronRightIcon />} colorSceheme="teal">
                        my projects
                        </Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    experience
                </Heading>
                <NoteSectionYear>
                    <NoteSectionYearYR>2020-25</NoteSectionYearYR>
                    University of Ottawa | Enrolled in undergraduate honours program in Computer Science with co-op.
                </NoteSectionYear>
                <NoteSectionYear>
                    <NoteSectionYearYR>2020-21</NoteSectionYearYR>
                    7Factor | Programming Intern ~ Worked with a senior engineer on a covid-19 screening tool built on vue.js. Based in Atlanta but was remote.
                </NoteSectionYear>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    fun facts
                </Heading>
                <Para>
                Some of my other interests include crypto, working out, and gaming. You can find my collection of pixels
                @ {' '}
                <NextLink href="https://ashvin.tez.page/">
                    <Link>
                        ashvin.tez
                    </Link>
                </NextLink>
                .
                </Para>
            </Section>

        </Container>
    )
}

export default Page