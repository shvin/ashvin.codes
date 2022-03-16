import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { PostGridItem } from '../components/grid-item'

import thumbwsl from '../public/images/posts/thumbwsl.png'
import thumbsitev1 from '../public/images/posts/thumbsitev1.png'
import thumbsmartcontract from '../public/images/posts/smartcontract_thumb.png'
import thumbterrawiki from '../public/images/posts/thumbterrawiki.png'

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
                    title="My Ubuntu WSL Workspace"
                    thumbnail={thumbwsl}
                    />
                    <PostGridItem 
                    id="sitev1"
                    title="Static Portfolio [v1]"
                    thumbnail={thumbsitev1}
                    />
                    <PostGridItem
                    id="smartcontract"
                    title="ERC721 Smart Contract Optimization"
                    thumbnail={thumbsmartcontract}
                    />
                    <PostGridItem
                    id="terrawiki"
                    title="AnchorSDK Guide for TerraWiki.org"
                    thumbnail={thumbterrawiki}
                    />
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)

export default Posts