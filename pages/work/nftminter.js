import { Container, Badge, Link, List, ListItem, Divider } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/para'
import Layout from '../../components/layouts/article'
import NextLink from 'next/link'

const Work = () => {
    return (
        <Layout title="nftminter">
            <Container maxW={"container.xl"}>
                <Title>
                    NFT Minting dAPP <Badge>2022</Badge>
                </Title>
                <P>
                    This is a fullstack web3 application featuring a React frontend minting dAPP as well as a backend smart contract programmed with Solidity and Hardhat. Tested with the rinkeby ethereum network created for the mainnet.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="">
                            soon! <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/macOS/Linux/iOS/Android</span>
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
                        <Link href="https://github.com/shvin/mintanft">
                        View Repository <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
                <Divider my={4} />
                <WorkImage src="/images/works/nftminter_2.png" alt="nftminter" />
                <P>
                    The front-end of this site built with React is used to connect to a user&apos;s wallet, makes sure there is enough gas, and then sends the wallet a transaction.
                </P>
                <Divider my={4} />
                <WorkImage src="/images/works/nftminter_1.png" alt="nftminter" />
                <P>
                    Using OpenZeppelin&apos;s ERC721 libaries, the contract was created to make a randomized 3-word SVG to be used as a fully on-chain NFT. The snippet above shows the <code> mintNFT() </code> function creating the NFT&apos;s JSON.
                </P>
                <P>
                    &nbsp;
                    Interested in more smart contracts? Check out my research page on larger scale contracts with gas optimizations and other features. Click
                    <NextLink href="/work/smartcontract">
                        <Link>
                            &nbsp;here<ExternalLinkIcon mx="2px" />&nbsp;
                        </Link>
                    </NextLink>
                    to learn more!
                </P>
                <Divider my={4} />
            </Container>
        </Layout>
    )
}

export default Work