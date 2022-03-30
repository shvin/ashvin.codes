import { 
    Container,
    Heading,
    SimpleGrid,
    Box,
    useColorModeValue,
    Divider,
    Link
} from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbashvincodes from '../public/images/works/ashvincodes_thumb.png'
import thumbvinbot from '../public/images/works/vinbot_thumb.png'
import thumbwikiscraper from '../public/images/works/wikiscraper_thumb.jpg'
import thumbgtsys from '../public/images/works/gtsys_thumb.png'
import thumbnftminter from '../public/images/works/nftminter_thumb.jpg'
import thumbwashproto from '../public/images/works/washproto_thumb.png'

const Work = () => {
    return (
        <Container maxW="full">
            <Heading as="h3" fontSize={20} mb={4}>
                Projects
            </Heading>

            <SimpleGrid columns={[1,1,3]} gap={6}>
                <Section>
                    <WorkGridItem
                    id="ashvincodes"
                    title="portfolio website"
                    thumbnail={thumbashvincodes}
                    >
                        This website! Built with Next.js, ChakraUI, Framer Motion, and Three.js. This website is the second implementation of my portfolio after first trying a static site.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem
                    id="nftminter"
                    title="ethereum NFT minter"
                    thumbnail={thumbnftminter}
                    >
                        NFT Minting dAPP built with React and Ethers.js, ERC-721 Smart Contract made with Solidity and Hardhat.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem
                    id="vinbot"
                    title="vinbot"
                    thumbnail={thumbvinbot}
                    >
                        vinbot is a quality of life discord bot created with the discord.py library. the bot handles with roles and moderation.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem
                    id="wikiscraper"
                    title="terraria wiki scraper"
                    thumbnail={thumbwikiscraper}
                    >
                        a small web scraper bot that reads and returns item drop percentages from the game terraria. bot scrapes the terraria official wiki for these drop rates found on the item&apos;s page.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem
                    id="washprotocol"
                    title="wash protocol"
                    thumbnail={thumbwashproto}
                    >
                        a protocol built on the terra ecosystem focusing on user privatization utilizing the $SCRT network. 
                    </WorkGridItem>
                </Section>
            </SimpleGrid>

            <Section delay={0.3}>
            <Divider my={10} />
            <Box
                borderRadius="lg"
                bg={useColorModeValue('#40b7f7', '#946bfa')}
                p={3}
                mb={6}
                align="center"
            >
                potential projects
            </Box>
                <p>
                    ~ smartshuffle: [in development!] a feature that shuffles your playlist in a way to play you songs you don&apos;t hear as often. currently being developed for the {' '}
                        <a href="https://spicetify.app/">
                            <Link>
                                Spicetify
                            </Link>
                        </a> spotify tool.
                </p>
                <p>
                    ~ discord bot built with discord.js that tracks my crypto portfolio
                </p>
                <p>
                    ~ web program that takes your daily wordle copy/pastes and provides you with detailed statistics about your performances
                </p>
            </Section>

            <Section delay={0.2}>
                <Divider my={10} />
                <Heading as="h3" fontSize={20} mb={4}>
                    Classes
                </Heading>
            </Section>

            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section delay={0.4}>
                    <WorkGridItem
                    id="gtsys"
                    title="global transport systems"
                    thumbnail={thumbgtsys}
                    >
                        a mock web application that was worked on as a part of a class project in SEG 2900.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Work