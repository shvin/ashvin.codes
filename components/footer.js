import {
    Box,
    Container,
    Stack,
    Text,
    Link,
    useColorModeValue,
} from '@chakra-ui/react';
import Section from '../components/section';
  
export default function Footer() {
    return (
            <Box
                bg={useColorModeValue('#f0e7db', '#202023')}
                color={useColorModeValue('black', 'white')}
                mt={20}
            >
                <Section delay={0.2}>
                    <Container
                        as={Stack}
                        maxW={'6xl'}
                        py={4}
                        direction={{ base: 'column', md: 'row' }}
                        spacing={4}
                        justify={{ base: 'center', md: 'space-between' }}
                        align={{ base: 'center', md: 'center' }}
                    >
                        <Stack direction={'row'} spacing={6}>
                            <Link href={"../"}>Home</Link>
                            <Link href={'../work'}>Projects</Link>
                            <Link href={'../posts'}>Posts</Link>
                            <Link href={'../contact'}>Contact</Link>
                        </Stack>
                        <Text>©{new Date().getFullYear()} ashvin.codes. All rights reserved.</Text>
                    </Container>
                </Section>
            </Box>
    );
}