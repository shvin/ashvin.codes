import { Container, Badge, Link, List, ListItem, Divider } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/post'
import P from '../../components/para'
import Layout from '../../components/layouts/article'

const Posts = () => {
    return (
        <Layout title="TerraWiki.org Guide on Anchor Earn SDK">
            <Container maxW={"container.xl"}>
                <Title>
                    TerraWiki.org Guide on Anchor Earn SDK <Badge>2022</Badge>
                </Title>
                <P>
                    In preparation for the upcoming Terra hackathon I am particpating in, I created a guide on setting up the Anchor Earn SDK on the TerraWiki.org forum that got approved.
                </P>
                <Divider my={4} />
                <P>
                    The guide features the introduction to the Earn SDK that allows you to use their API to utilize the features on Anchor protocol for the Terra blockchain. Created for Terra.js, but also can be used with their own modified Anchor.js.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Terra</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Post</Meta>
                        <Link href="https://terrawiki.org/en/tutorials/using-anchorsdk-for-development">
                            Read Here! <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Posts