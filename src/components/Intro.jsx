import { Grid, GridItem, Image, Heading, Text, Box, Flex, List, ListItem, ListIcon } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';
import logos from '../data/logos.json';
// import WordCarousel from './WordCarousel';

export default function Intro() {
 
    // const words = ['Mentor', 'Builder', 'Consultant', 'Learner', 'Partnership Manager'];
    const Web3Titles = [ 'Developer', 'Partnership Manager', 'Mentor' ];
    const AECTitles = [ 'Civil Engineer', 'Project Manager', 'Quality Manager' ];

    const font = 'font8';

    return (
        <Grid 
            templateAreas={`"greeting tech"
                            "description description"`}
            gridTemplateRows={'50% 50%'}
            gridTemplateColumns={'60% 40%'}
            borderRadius='10px'
            margin='10px' 
            height='500px'
            width='100%'
            backgroundColor='black'
            color='white'
            fontFamily={font}
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
                    w='100%'
                >
                    <Heading 
                        p='5px' 
                        size='2xl' 
                        alignSelf='start' 
                        noOfLines={1} 
                        fontFamily={font}
                    >
                        Howzit,
                    </Heading>
                    <Heading 
                        p='5px' 
                        size='2xl' 
                        alignSelf='center' 
                        noOfLines={1}
                        fontFamily={font}
                    >
                        I'm Hico.
                    </Heading>
                <Flex 
                    width='100%'
                    justifyContent='space-around'
                    fontSize={{ base: '8px', md: '15px', lg: '15px' }}  
                >
                    <Flex flexDirection='column'>
                        <Text 
                            textAlign='center' 
                            p='5px' 
                            fontSize='2xl'
                        >
                            Web3 
                        </Text>

                            <List>
                                {Web3Titles.map((title, i) => {
                                    return (
                                        <ListItem key={i}>
                                        <ListIcon 
                                            as={ArrowRightIcon} 
                                            color='brand.300'
                                        />
                                        {title}
                                        </ListItem>
                                    )
                                })}
                            </List>
                    </Flex>
                    <Flex 
                        flexDirection='column'
                    >
                        <Text 
                            textAlign='center' 
                            p='5px' 
                            fontSize='2xl'
                        >
                            AEC 
                        </Text>
                        <List>
                            {AECTitles.map((title, i) => {
                                return (
                                    <ListItem key={i}>
                                    <ListIcon 
                                        as={ArrowRightIcon} 
                                        color='brand.300'
                                    />
                                    {title}
                                    </ListItem>
                                )
                                })}
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
                            <Box 
                                key={i} 
                                display='flex' 
                                flexDirection='column' 
                                alignItems='center'
                                width='100px'
                            >
                                <Image 
                                    src={logo.path} 
                                    boxSize='50px' 
                                    alt={logo.name} 
                                    p='1px' 
                                    backgroundColor='white' 
                                />
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
                    padding='5px'
                    height='100%'
                    justify='space-around'
                >
                    <Text>
                        Civil Engineering Construction Management educational background with over 10 years of Architectural, Engineering and Construction experience. 
                    </Text>
                    <Text>&</Text>
                    <Text 
                        paddingBottom='5px'
                    >
                        Web3 developer, ArchiDAO Core Member, Partnership Manager at Forward and Mentor at AthensLabs.</Text>
                </Flex>
            </GridItem>
        </Grid>
    )
}