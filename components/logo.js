import Link from 'next/link'
import Image from 'next/image'
import { Text, userColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;

    &:hover img {
        transform: rotate(20deg);
    }
`

const Logo = () => {
    const footPprintImg = `/images/footprints${userColorModeValue('', '-dark')}.png`

    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <Image src={footPprintImg} alt="logo" height={20} width={30} />
                    <Text 
                        color={userColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontFamily='M PLUS Rounded 1c'
                        fontWeight="bold"
                        ml={3}
                    >
                        Ashvin Ramanathan
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo
