import { Grid, GridItem, Image, Heading, Text, Box, Flex, List, ListItem, ListIcon } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';
import logos from '../data/logos.json';
import { useEffect } from 'react';
// import WordCarousel from './WordCarousel';


export default function Intro() {
 
    // const words = ['Mentor', 'Builder', 'Consultant', 'Learner', 'Partnership Manager'];

    useEffect(() => {
        // console.log('aweh')
    }, [])

    const logoMap = logos.map((logo, i) => {
        // console.log(logo)
return(
        <Box display='flex' flexDirection='column' alignItems='center'>
            <Image src='./logos/ethereum.svg' boxSize='50px' alt='more text' p='1px' backgroundColor='white' />
            <Text color='orange'>aaaaaaaaaaaaaaaaaaaaa</Text>
        </Box>                    
)
    // console.log('awe')
})    


    return (
        <Grid 
            templateAreas={`"greeting tech"
                            "description description"`}
            gridTemplateRows={'50% 50%'}
            gridTemplateColumns={'60% 40%'}
            // border='solid blue' 
            borderRadius='10px'
            margin='10px' 
            height='500px'
            width='100%'
            backgroundColor='black'
            color='white'
            fontFamily={'font4'}
        >
            <GridItem 
                borderRight='solid white' 
                display='flex' 
                p='5px' 
                area={'greeting'} 
                w='100%'
            >
                <Flex 
                    direction='column'
                    justify='space-around'
                    align='center'
                    // border='solid red'
                    w='100%'
                >
                    <Heading 
                        p='5px' 
                        size='2xl' 
                        alignSelf='start' 
                        noOfLines={1} 
                        color='brand.100'
                    >
                        Howzit,
                    </Heading>
                    <Heading 
                        p='5px' 
                        size='2xl' 
                        alignSelf='center' 
                        noOfLines={1}
                    >
                        I'm Hico.
                    </Heading>
                <Flex 
                    // border='solid red'
                    width='100%'
                    justifyContent='space-around'
                    fontSize={{ base: '8px', md: '15px', lg: '15px' }}  
                >
                    <Flex flexDirection='column'>

                        <Text 
                            textDecorationLine='underline' 
                            textAlign='center' 
                            p='5px' 
                            fontSize='2xl'
                        >
                            Web3 
                        </Text>
                            <List>
                                <ListItem>
                                    <ListIcon 
                                        as={ArrowRightIcon} 
                                        color='brand.300'
                                    />
                                    Developer
                                </ListItem>
                                <ListItem>
                                    <ListIcon 
                                        as={ArrowRightIcon} 
                                        color='brand.300'
                                    />
                                    Partnership Manager
                                </ListItem>
                                <ListItem>
                                    <ListIcon 
                                        as={ArrowRightIcon} 
                                        color='brand.300'
                                    />
                                    Mentor
                                </ListItem>
                            </List>
                    </Flex>
                    <Flex 
                        flexDirection='column'
                    >
                        <Text 
                            textDecorationLine='underline' 
                            textAlign='center' 
                            p='5px' 
                            fontSize='2xl'
                        >
                            AEC 
                        </Text>
                        <List>
                                <ListItem>
                                    <ListIcon 
                                        as={ArrowRightIcon} 
                                        color='brand.300'
                                    />
                                    Civil Engineer
                                </ListItem>
                                <ListItem>
                                    <ListIcon 
                                        as={ArrowRightIcon} 
                                        color='brand.300'
                                    />
                                    Project Manager
                                </ListItem>
                                <ListItem>
                                    <ListIcon 
                                        as={ArrowRightIcon} 
                                        color='brand.300'
                                    />
                                    Quality Manager
                                </ListItem>
                            </List>
                    </Flex>
                </Flex>
                <Text 
                    p='5px' 
                    alignSelf={{base: 'end', lg: 'end'}}
                    fontSize={{base: '8px', md: '13px'}}
                >
                    Based in Cape Town, South Africa.
                </Text>
                </Flex>

            {/* <Hide below='md'>

                <Center 
                    // w='100%'
                    // h='100%'
                    border='solid red'
                    
                >
                    <Image 
                        // src='./Hero.jpeg'
                        // boxSize='200px'
                        // objectFit='cover'
                        // border='solid red'
                        borderRadius='50px'
                        alt='Profile Picture'
                        fallbackSrc='https://via.placeholder.com/200'
                        
                    />
                </Center>

                </Hide> */}
            </GridItem>

            <GridItem  
                display='flex'
                justifyContent='center'
                flexDirection='column'
                textAlign='center'
            >
                <Heading 
                    padding='10px'
                    fontSize={{base: '20px', md: '50px'}}
                >
                    Tech I use
                </Heading>
                <hr />
                    <Flex 
                        p='10px'
                        // border='solid aqua'
                        justify='space-around' 
                        align='center' 
                        height='100%'
                        width='100%' 
                        flexWrap='wrap' 
                        gap='5px'
                        overflow='auto'
                    >
                    {logos.map((logo, i) => {
                        return (
                            <Box key={i} display='flex' flexDirection='column' alignItems='center'>
                                <Image src={logo.path} boxSize='50px' alt={logo.name} p='1px' backgroundColor='white' />
                                <Text>{logo.name}</Text>
                            </Box>                         
                        )
                    })}
                    </Flex>
            </GridItem>

            <GridItem 
                p='20px'
                bg='' 
                area={'description'} 
                textAlign='center' 
                borderTop='solid white'
            >
                <Flex
                    flexDirection='column'
                    fontSize={{base: '15px', md: '25px', lg: '20px', xl: '30px'}}
                    fontFamily='font1'
                    padding='5px'
                    height='100%'
                    justify='space-around'
                >
                    <Text>
                        Civil Engineering Construction Management educational background with over 10 years of AEC experience. 
                    </Text>
                    <Text>and</Text>
                    <Text 
                        paddingBottom='5px'
                    >
                        Web3 developer, ArchiDAO Core Member, Partnership Manager at Forward and Mentor at ConsenSys and AthensLabs.</Text>
                    {/* <hr /> */}
                    {/* <Text paddingTop='5px' fontSize={{base: '10px', md: '20px', lg: '15px', xl: '20px'}}>Below are some of the projects I've worked on and working on</Text> */}
                </Flex>
            </GridItem>
        </Grid>
    )
}