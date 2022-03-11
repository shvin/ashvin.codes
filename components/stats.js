import {
    Box,
    chakra,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
} from '@chakra-ui/react';
  
function StatsCard({ title, stat }) {
    return (
      <Stat
        px={{ base: 4, md: 8 }}
        py={'5'}
        shadow={'xl'}
        border={'1px solid'}
        borderColor={useColorModeValue('gray.800', 'gray.500')}
        rounded={'lg'}>
        <StatLabel fontWeight={'medium'} isTruncated>
          {title}
        </StatLabel>
        <StatNumber fontSize={'medium'} fontWeight={'sm'}>
          {stat}
        </StatNumber>
      </Stat>
    );
}
  
const Stats = () => {
    return (
        <Box maxW="7xl" mx={'auto'} pt={0} px={{ base: 2, sm: 12, md: 17 }}>
            <chakra.h1
                textAlign={'center'}
                fontSize={'3xl'}
                py={5}
                fontWeight={'bold'}
            >
                Skills // Tools
            </chakra.h1>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
                <StatsCard title={'Langs:'} stat={'JavaScript, Java, Python3, Solidity'} />
                <StatsCard title={'Tools:'} stat={'React.js, Hardhat, Vue, Next.js, ChakraUI, Three.js, Discord.py, Ethers.js'} />
                <StatsCard title={'Skills:'} stat={'Git, Docker, Node, Photoshop, Blender'} />
            </SimpleGrid>
        </Box>
    );
}

export default Stats;