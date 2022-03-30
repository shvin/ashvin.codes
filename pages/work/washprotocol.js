import { Container, Badge, Link, List, ListItem, Divider } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/para'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="wash protocol">
            <Container maxW={"container.xl"}>
                <Title>
                    wash protocol <Badge>2022</Badge>
                </Title>
                <P>
                    Wash Protocol is a privacy focused, decentralized non-custodial tool that is starting it&apos;s journey on the Terra blockchain- and aims to be the one-stop crosschain IBC-comptabile privacy protocol. 
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Chain</Meta>
                        <span>Terra</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Terra.js, React.js, Terrain</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Langs</Meta>
                        <span>JavaScript, Rust</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Github</Meta>
                        <Link href="https://github.com/washprotocol">
                            View Repository <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://washprotocol.com">
                            washprotocol.com <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
                <Divider my={4} />
                <P>
                    One of the main goals of Wash Protocol is to make privacy and anonymity easily accessible to all with minimal to no barriers to entry. The goal is to have a self sustaining protocol where users don&apos;t have to worry about any fees at all- you recieve exactly what you deposit.
                    A solution to compeletely eliminate all fees, is a community validator- where all staking yield is redirected to cover any fees that the protocol has to make to maintain privacy. This eliminates the need for complex tokenomics and unnecessary fees all around, while also creating a source of cash flow for all necessary expenses (Validator expenses, salaries, fees, marketing campaigns)
                </P>
                <Divider my={4} />
                <P>
                    This project was originally created for the Terra National DeFi Hackathon in 2022, and is still being developed by me and 2 other group members past the hackathon. I was the lead front-end developer during the hackathon.
                </P>
            </Container>
        </Layout>
    )
}

export default Work