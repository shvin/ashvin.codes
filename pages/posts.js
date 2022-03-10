import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { PostGridItem } from '../components/grid-item'

import thumbwsl from '../public/images/posts/thumbwsl.png'
import thumbsitev1 from '../public/images/posts/thumbsitev1.png'

const Posts = () => (
    <Layout title="Posts">
        <Container maxW={"full"}>
            <Heading as="h3" fontSize={20} mb={4}>
                Posts
            </Heading>
            <Section delay={0.1}>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <PostGridItem 
                    id="wsl"
                    title="My ubuntu WSL workspace"
                    thumbnail={thumbwsl}
                    />
                    <PostGridItem 
                    id="sitev1"
                    title="static portfolio v1"
                    thumbnail={thumbsitev1}
                    />
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)

export default Posts