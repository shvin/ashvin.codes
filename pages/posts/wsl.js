import { Container, Badge, Link, List, ListItem, Divider } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta, WorkImage } from '../../components/post'
import P from '../../components/para'
import Layout from '../../components/layouts/article'

const Posts = () => {
    return (
        <Layout title="ubuntu WSL">
            <Container maxW={"container.xl"}>
                <Title>
                    My ubuntu WSL workspace <Badge>2021</Badge>
                </Title>
                <P>
                    Coding on windows 10 was not very efficient or easy to use and I wanted to be able to play some games once in a while without dual booting. Therefore I installed ubuntu through the Windows Subsystem for Linux allowing all my code and packages to stay on the linux partition windows made.
                </P>
                <Divider my={4} />
                <WorkImage src="/images/posts/wsl.gif" alt="wsl" />
                <P>
                    The animation above shows my workspace environment for coding this website alongside WSL and vscode. Some of the extensions on my .zsh include <code>syntax-highlighter</code>, <code>auto-complete</code>, and <code>neofetch</code>. There is a seamless integration between vscode and the updated win11 terminal, allowing easy file transfer between windows and linux via native file explorer. Since it is the full ubuntu distro, I was able to utilize {''} 
                    <a href="https://ohmyz.sh/">
                        <Link>
                            zsh 
                        </Link>    
                    </a>
                    &nbsp;and {''}
                    <a href="https://github.com/romkatv/powerlevel10k">
                        <Link>
                            powerlevel10k
                        </Link>    
                    </a>
                    &nbsp;for customization and plugins.
                </P>
                <Divider my={4} />
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Ubuntu</span>
                    </ListItem>
                    <ListItem>
                        <Meta>OS</Meta>
                        <span>Windows 11, Linux</span>
                    </ListItem>
                    <ListItem>
                        <Meta>WSL</Meta>
                        <Link href="https://docs.microsoft.com/en-us/windows/wsl/install">
                            Install Here! <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Posts