import { Container, Badge, Link, List, ListItem, Divider, } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta, WorkImage } from '../../components/post'
import P from '../../components/para'
import Layout from '../../components/layouts/article'

const Posts = () => {
    return (
        <Layout title="smartcontract">
            <Container maxW={"container.xl"}>
                <Title>
                    ERC721 Research/Optimization <Badge>2022</Badge>
                </Title>
                <P>
                    This was a practical research case where I learned in depth about the smart contracts used to mint entire NFT collections on a large scale. This included Gas Optimization, Use of Merkle Trees for efficient Whitelists, Config files to easily change prices, and more.
                </P>
                <Divider my={4} />
                    <WorkImage src="/images/posts/smartcontract_1.png" alt="smartcontract" />
                <P>
                    The figure above shows how data moves in a Merkle Tree that can be adapted for saving wallet addresses for a NFT whitelist. Another feature included is the ability for owners to mint NFTs using the same contract which is used for giveaways. Potential use case in the future would be creating a fullstack minting application to create and mint a collection. This is still a work in progress!
                </P>
                <Divider my={4} />
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Ethereum</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>React.js, Solidity, Hardhat</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Post</Meta>
                        <Link href="">
                            soon! <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Github</Meta>
                        <Link href="https://gist.github.com/shvin/34f00d3b1ff4db60e0a830d56e94e377">
                        View Gist <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Posts