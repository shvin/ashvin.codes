import { Container, Badge, Link, List, ListItem, Divider } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta, WorkImage } from '../../components/post'
import P from '../../components/para'
import Layout from '../../components/layouts/article'

const Posts = () => {
    return (
        <Layout title="static site v1">
            <Container maxW={"container.xl"}>
                <Title>
                    static portfolio site [v1] <Badge>2021</Badge>
                </Title>
                <P>
                    Before this site was created, I was using static HTML5, SCSS, and JS to built the original ashvin.codes portfolio site. Features a global navbar and footer, dynamically resizing grid layout for projects, as well as a contact page.
                </P>
                <Divider my={4} />
                <WorkImage src="/images/posts/sitev1.gif" alt="sitev1" />
                <P>
                    When I started developing this site, I quickly realized that hardcoding everything as static elements was not the best option for site expansion in the future. I decided to then use Next.js and ChakraUI to build a dynamic site that I could expand and modify extremely easily. The implementation of the components is very Object based allowing easy and global changes.
                </P>
                <Divider my={4} />
                <List ml={4} my={4}>
                <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://shvin.github.io">
                            https://shvin.github.io <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/macOS/Linux/iOS/Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>html5, sCSS</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Github</Meta>
                        <Link href="https://github.com/shvin/shvin.github.io">
                        View Repository <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Posts