import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="#946bfa" p={3} mb={6} align="center">
                hello ~ welcome to ashvin.codes!
            </Box>

            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Ashvin Ramanathan
                    </Heading>
                </Box>
            <p>Internet Enthusiast ( Student / Developer )</p>
            </Box>
        </Container>
    )
}

export default Page