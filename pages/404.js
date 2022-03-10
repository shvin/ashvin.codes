import NextLink from 'next/link'
import {
    Box,
    Heading,
    Text,
    Container,
    Divider,
    Button,
    useColorModeValue,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

const NotFound = () => {
    return (
        <Container>
            <Heading as="h1">Not Found</Heading>
            <Text>The page you&apos;re looking for was not found.</Text>
            <Divider my={6} />

            <Box my={6} align="center">
                <NextLink href="/">
                    <Button
                    rightIcon={<ChevronRightIcon />}
                    bg={useColorModeValue('#64b4c4', '#5e55c9')}
                    alignItems={"middle"}
                    py={2}
                    pl={4}
                    pr={2}
                    _hover={{ bg: useColorModeValue('#4f8f9c', '#3f3a7a') }}
                    >
                        Return Home
                    </Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default NotFound