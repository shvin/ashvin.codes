import { Container, Badge, Link, List, ListItem, Divider } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/para'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="portfolio">
            <Container>
                <Title>
                    ashvin.codes <Badge>2022</Badge>
                </Title>
                <P>
                    V2 of my personal portfolio website. Built with Next.js, ChakraUI, Three.js, and Framer Motion.
                    The previous implementation of this site was completely static making it a hassle for styling, expanding, etc.
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
                        <Link href="">
                            See the post about this site! <ExternalLinkIcon mx="2px" />
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

                <WorkImage src="/images/works/ashvincodes_1.png" alt="ashvincodes" />
                <P>
                    This is the first version of the site. Although being a static site, it featured a global navbar and footer as well as a dynamically shaping projects grid.
                </P>
                <Divider my={4} />
                <WorkImage src="/images/works/ashvincodes_2.png" alt="ashvincodes" />
                <P>
                    The original version of the site was made with SCSS allowing for easier styling. The snippet of code above was used for styling the Projects tab in the 1st picture.
                </P>
                <Divider my={4} />
            </Container>
        </Layout>
    )
}

export default Work