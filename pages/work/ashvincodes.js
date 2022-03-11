import { Container, Badge, Link, List, ListItem, Divider, SimpleGrid, Box, } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta, } from '../../components/work'
import P from '../../components/para'
import Layout from '../../components/layouts/article'
import { GridItem } from '../../components/grid-item'
import Section from '../../components/section'
import { CheckIcon } from '@chakra-ui/icons'
import { Feature } from '../../components/features'

import ashvincodes_1 from '../../public/images/works/ashvincodes_1.png'
import ashvincodes_2 from '../../public/images/works/ashvincodes_2.png'

const Work = () => {
    return (
        <Layout title="portfolio">
            <Container maxW={"container.xl"}>
                <Title>
                    ashvin.codes <Badge>2022</Badge>
                </Title>
                <P>
                    V2 of my personal portfolio website. Built with Next.js, ChakraUI, Three.js, and Framer Motion.
                    The previous implementation of this site was completely static making it a hassle for styling, expanding, etc. Hosted with Vercel.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://ashvin.codes">
                            https://ashvin.codes <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/macOS/Linux/iOS/Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Next.js, ChakraUI, Three.js, Framer Motion</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Post</Meta>
                        <Link href="../posts/sitev1">
                            Read about v1! <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Github</Meta>
                        <Link href="https://github.com/shvin/ashvin.codes">
                        View Repository <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
                <Divider my={4} />
                
                <SimpleGrid columns={[1,1,2]} gap={2}>
                    <Section>
                        <GridItem
                        title="theme switching"
                        thumbnail={ashvincodes_1}
                        >
                            utilization of theme.js globally to maintain the same look
                        </GridItem>
                    </Section>
                    <Section>
                        <GridItem
                        title="projects subpage shell"
                        thumbnail={ashvincodes_2}
                        >
                            framework that all project subpages utilize
                        </GridItem>
                    </Section>
                </SimpleGrid>
                <Divider my={4} />
                <Box
                as="section"
                maxW="5xl"
                mx="auto"
                py="12"
                px={{
                    base: '6',
                    md: '8',
                }}
                >
                    <SimpleGrid
                    columns={{
                        base: 1,
                        md: 2,
                    }}
                    spacingX="14"
                    spacingY={{
                        base: '8',
                        md: '10',
                    }}
                    >
                        <Feature title="Theme Switcher" icon={<CheckIcon color={"green.500"} boxSize={"80%"} />}>
                            The site features Dark and Light colorways that can be toggled using the navbar button.
                        </Feature>
                        <Feature title="Animations" icon={<CheckIcon color={"green.500"} boxSize={"80%"} />}>
                            Animations using Framer Motion are used to create smooth transitions between pages and sections.
                        </Feature>
                        <Feature title="Navbar/Footer" icon={<CheckIcon color={"green.500"} boxSize={"80%"} />}>
                            Global Navbar and footer that dynamically resize based on window size. Navbar has a hamburger style menu for mobile devices.
                        </Feature>
                        <Feature title="Work/Posts Modules" icon={<CheckIcon color={"green.500"} boxSize={"80%"} />}>
                            New Work and Posts modules are easily created via the component templates for future website expansion. 
                        </Feature>
                    </SimpleGrid>
                </Box>
            </Container>
        </Layout>
    )
}

export default Work