import Logo from './logo'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({ href, children, path }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('black', 'white')
    const hoverColor = useColorModeValue('#52a6eb', '#946bfa')
    const activeColor = useColorModeValue('black', 'white')

    return (
        <NextLink href={href}>
            <Link
            px={2}
            py={1}
            rounded={"lg"}
            p={2}
            bg={active ? hoverColor : undefined}
            color={active ? activeColor : inactiveColor}
            >
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props
    return (
        <Box
        position="fixed"
        as="nav"
        w="100%"
        bg={useColorModeValue('#f0e7db', '#202023')}
        style={{backdropFilter: 'blur(10px)'}}
        zIndex={1}
        {...props}
        >
            <Container display="flex" 
            p={2} 
            maxW="full"
            wrap="wrap"
            align="center"
            justify="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tight'}>
                        <Logo />
                    </Heading>
                </Flex>
            
                <Stack
                direction={{base: 'column', md: 'row'}}
                display={{base: 'none', md: 'flex'}}
                width={{base: 'full', md: 'auto'}}
                alignItems="center"
                flexGrow={1}
                mt={{ base: 4, nmd: 0 }}
                >
                    <LinkItem href="/work" path={path}>
                        Work
                    </LinkItem>
                    <LinkItem href="/posts" path={path}>
                        Posts
                    </LinkItem>
                    <LinkItem href="/contact" path={path}>
                        Contact
                    </LinkItem>
                </Stack>

                <Box flex={1} align="right">
                    <ThemeToggleButton />
                    <Box ml={1} display={{base: 'inline-block', md: 'none'}}>
                      <Menu>
                        <MenuButton as={IconButton}
                        icon={<HamburgerIcon />}
                        variant="outline"
                        aria-label="Options"
                        />
                        <MenuList
                        bg={useColorModeValue('#f0e7db', '#202023')}
                        >
                            <NextLink href="/" passHref>
                                <MenuItem as={Link}>Home</MenuItem>
                            </NextLink>
                            <NextLink href="/work" passHref>
                                <MenuItem as={Link}>Work</MenuItem>
                            </NextLink>
                            <NextLink href="/posts" passHref>
                                <MenuItem as={Link}>Posts</MenuItem>
                            </NextLink>
                            <NextLink href="/contact" passHref>
                                <MenuItem as={Link}>Contact</MenuItem>
                            </NextLink>
                        </MenuList>
                      </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar