import { Container, Badge, Link, List, ListItem, Divider } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/para'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="vinbot">
            <Container maxW={"container.xl"}>
                <Title>
                    vinbot <Badge>2021</Badge>
                </Title>
                <P>
                    Quality of Life bot that handles a general set of tasks on discord. Built with the discord.py library, featuring a cog system to enable/disable features that may be useful to users.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Discord</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Discord.py, Python3</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Post</Meta>
                        <Link href="">
                            soon! <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Github</Meta>
                        <Link href="https://github.com/shvin/vinbot">
                        View Repository <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
                <Divider my={4} />
                <P>
                    Includes moderation features, utility commands, and server-wide custom prefixes for the bot. Primary feature of the bot that is still currently being worked on is the voting system running on emote reactions. Also runs on event triggers to update things such as the time in the bot&apos;s rich presence.
                </P>
                <Divider my={4} />
            </Container>
        </Layout>
    )
}

export default Work