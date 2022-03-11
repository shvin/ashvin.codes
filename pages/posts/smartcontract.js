import { Container, Badge, Link, List, ListItem, Divider, Box, SimpleGrid, } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta, WorkImage } from '../../components/post'
import P from '../../components/para'
import Layout from '../../components/layouts/article'
import { CheckIcon } from '@chakra-ui/icons'
import { Feature } from '../../components/features'

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
                        <Feature title="Mass Whitelist" icon={<CheckIcon color={"green.500"} boxSize={"80%"} />}>
                            Usage of Merkle Trees for an efficient Whitelist process utilizing a .json file.
                        </Feature>
                        <Feature title="Giveaway Mints" icon={<CheckIcon color={"green.500"} boxSize={"80%"} />}>
                            Contract owner can mint NFTs and only have to pay gas for a giveaway.
                        </Feature>
                        <Feature title="Pre/Public Sales" icon={<CheckIcon color={"green.500"} boxSize={"80%"} />}>
                            Set custom gas prices and mint prices for presale and public sale in the config files.
                        </Feature>
                        <Feature title="NFT Reveal" icon={<CheckIcon color={"green.500"} boxSize={"80%"} />}>
                            Features a reveal function to reveal the content of the NFTs to the public AFTER the mint.
                        </Feature>
                        <Feature title="Gas Optimization" icon={<CheckIcon color={"green.500"} boxSize={"70%"} />}>
                            Gas Optimization using ERC721A modified smart contracts.
                        </Feature>
                    </SimpleGrid>
                </Box>
            </Container>
        </Layout>
    )
}

export default Posts