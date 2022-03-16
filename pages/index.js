import {
    Container,
    Button,
    Box,
    Heading,
    Image,
    Link,
    useColorModeValue,
    Divider,
    HStack,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import NextLink from 'next/link'
import Section from '../components/section'
import Para from '../components/para'
import Stats from '../components/stats'
import Typewriter from 'typewriter-effect';
import { NoteSectionYear , NoteSectionYearYR } from '../components/yearsection'
import D3ModelLoader from '../components/3dmodelloader'
import dynamic from 'next/dynamic'

const D3Model = dynamic(() => import('../components/3dmodel'), {
    ssr: false,
    loading: () => <D3ModelLoader />
})

const Page = () => {
    return (
        <Layout>
            <Container maxW={"container.lg"}>
                <Section>
                    <D3Model />
                </Section>
                <Box
                borderRadius="lg"
                bg={useColorModeValue('#40b7f7', '#946bfa')}
                p={3}
                mx={10}
                mb={6}
                align="center"
                >
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                            .typeString('welcome to ashvin.codes!')
                            .changeDelay(100)
                            .pauseFor(2500)
                            .deleteAll()
                            .start();
                        }}
                    />
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
                        borderColor={useColorModeValue('black','white')}
                        borderWidth={2}
                        borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="full"
                        src="/images/ashvin.gif"
                        alt="Profile Picture"
                        />
                    </Box>
                </Box>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title" fontSize={26} mb={1} mt={-1}>
                        [about]
                    </Heading>
                    <Para>
                        Student at the University of Ottawa studying Computer Science, looking for internship or work
                        opportunities in Atlanta/USA or Ottawa/CA.
                        My most recent project is this website {' '}
                        <NextLink href="/work/ashvincodes">
                            <Link>
                                ashvin.codes 
                            </Link>
                        </NextLink>
                        ; built with Next.js, Chakra UI, Framer Motion, and Three.js. 
                    </Para>
                    <HStack my={4} spacing={8} justifyContent={"center"}>
                        <NextLink href="/work">
                            <Button
                            rightIcon={<ChevronRightIcon />}
                            bg={useColorModeValue('#64b4c4', '#5e55c9')}
                            alignItems={"middle"}
                            py={2}
                            pl={4}
                            pr={2}
                            _hover={{ bg: useColorModeValue('#4f8f9c', '#3f3a7a') }}
                            >
                                projects
                            </Button>
                        </NextLink>
                        <NextLink href="/posts">
                            <Button
                            rightIcon={<ChevronRightIcon />}
                            bg={useColorModeValue('#64b4c4', '#5e55c9')}
                            alignItems={"middle"}
                            py={2}
                            pl={4}
                            pr={2}
                            _hover={{ bg: useColorModeValue('#4f8f9c', '#3f3a7a') }}
                            >
                                posts
                            </Button>
                        </NextLink>
                        <NextLink href="/contact">
                            <Button
                            rightIcon={<ChevronRightIcon />}
                            bg={useColorModeValue('#64b4c4', '#5e55c9')}
                            alignItems={"middle"}
                            _hover={{ bg: useColorModeValue('#4f8f9c', '#3f3a7a') }}
                            py={2}
                            pl={4}
                            pr={2}
                            >
                                contact
                            </Button>
                        </NextLink>
                    </HStack>
                </Section>

                <Section delay={0.3}>
                    <Divider my={3} />
                    <Heading as="h3" variant="section-title" fontSize={26} mb={2}>
                        [experience]
                    </Heading>
                    <NoteSectionYear>
                        <NoteSectionYearYR>2020-25</NoteSectionYearYR>
                        University of Ottawa | Enrolled in undergraduate honours program in Computer Science with co-op. Computer Science Student Association and Crypto Club.
                    </NoteSectionYear>
                    <NoteSectionYear>
                        <NoteSectionYearYR>2020-21</NoteSectionYearYR>
                        7Factor | Programming Intern ~ Worked with a senior engineer on a covid-19 screening tool built on vue.js. Located in Atlanta, Remote.
                    </NoteSectionYear>
                </Section>

                <Section delay={0.3}>
                    <Divider my={5} />
                    <Heading as="h3" variant="section-title" fontSize={26} mb={1}>
                        [fun facts]
                    </Heading>
                    <Para>
                        Some of my other interests include crypto, working out, and gaming. You can find my collection of NFTs
                        @ {' '}
                        <a href="https://ashvin.tez.page/">
                            <Link>
                                ashvin.tez
                            </Link>
                        </a>
                        . My interests within the tech industry include web3.0, graphics, and machine learning.
                    </Para>
                </Section>

                <Section delay={0.4}>
                    <Divider mt={2} />
                    <Stats /> 
                </Section>
            </Container>
        </Layout>
    )
}

export default Page