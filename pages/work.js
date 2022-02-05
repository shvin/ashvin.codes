import { 
    Container,
    Heading,
    SimpleGrid,
    Divider,
    Box,
    useColorModeValue
} from '@chakra-ui/react'
import Para from '../components/para'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import { NoteSectionYear , NoteSectionYearYR } from '../components/yearsection'

import thumbashvincodes from '../public/images/works/ashvincodes_thumb.png'
import thumbvinbot from '../public/images/works/vinbot_thumb.png'
import thumbwikiscraper from '../public/images/works/wikiscraper_thumb.jpg'

const Work = () => {
    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                My Work
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={6}>
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
                        a small web scraper bot that reads and returns item drop percentages from the game terraria. bot scrapes the terraria official wiki for these drop rates found on the item's page.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>

            <Section delay={0.2}>
            <Box
            borderRadius="lg"
            bg={useColorModeValue('#40b7f7', '#946bfa')}
            p={3}
            mb={6}
            align="center"
            >
                potential projects
            </Box>
                <NoteSectionYear>
                    <NoteSectionYearYR>-</NoteSectionYearYR>
                    discord bot built with discord.js that tracks my crypto portfolio. 
                </NoteSectionYear>
                <NoteSectionYear>
                    <NoteSectionYearYR>-</NoteSectionYearYR>
                    reworked version of the spotify shuffle feature where you are likely to hear songs you don't hear as often
                </NoteSectionYear>
            </Section>

        </Container>
    )
}

export default Work