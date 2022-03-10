import Head from 'next/head'
import Navbar from '../navbar.js'
import Footer from '../footer.js'
import { Box, Container } from '@chakra-ui/react'

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit-no" />
                <title>ashvin.codes ~ home</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="full" pt={16}>
                {children}
            </Container>

            <Footer path={router.asPath} />
        </Box>
    )
}

export default Main