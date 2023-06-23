import { Grid, GridItem, Image, Heading, Text, Box, Center, VStack, Stack, Flex, Show, Hide, HStack } from '@chakra-ui/react';
import { SiReact, SiNodedotjs, SiSolidity, SiChakraui, SiVite } from "react-icons/si";

export default function Intro() {

    return (
        <Grid 
            templateAreas={`"greeting tech"
                            "description description"`}
            gridTemplateRows={'50% 50%'}
            gridTemplateColumns={'70% 30%'}
            border='solid blue' 
            margin='10px' 
            height='500px'
            width='100%'
            backgroundColor='black'
            color='white'
        >
            <GridItem 
                border='solid blue' 
                display='flex' 
                flexDirection='row' 
                pl='2' 
                bg='' 
                area={'greeting'} 
                w='100%'
            >
                <Flex 
                    direction='column'
                    justify='space-around'
                    align='center'
                    border='solid red'
                    w='100%'
                >

                <Heading as='h1' size='3xl' noOfLines={1}>
                    Howzit,
                </Heading>
                <Text fontSize='4xl'>
                    I'm Hico
                </Text>
                <Text fontSize='1xl'>
                    Based in Cape Town.
                </Text>
                </Flex>

            <Hide below='md'>

                <Center 
                    w='100%'
                >
                    <Image 
                        src='https://via.placeholder.com/250'
                        borderRadius='50px'
                        alt='Profile Picture'
                        fallbackSrc='https://via.placeholder.com/150'
                    />
                </Center>

                </Hide>
            </GridItem>

            <GridItem  
                border='solid blue'
                
            >
                    {/* <Flex 
                        flexDirection='column' 
                        justify='space-evenly' 
                        align='center' 
                        height='100%' 
                        // flexWrap='wrap' 
                    > */}
                    <Heading textAlign='center' textDecoration='underline' p='10px' >Tech Stack</Heading>

                    <HStack 
                        flexWrap='wrap' 
                        justify='space-evenly' 
                    >

                        <SiReact size='5em'/>
                        <SiNodedotjs size='5em' />
                        <SiSolidity size='5em' />
                        <SiChakraui size='5em' />
                        <SiVite size='5em' />

                    </HStack>
                    {/* </Flex> */}

            </GridItem>

            <GridItem 
                // pl='2' 
                p='20px'
                bg='' 
                area={'description'} 
                textAlign='center' 
                // border='solid blue'
            >
                <Text fontSize='xl'>From Civil Engineering Construction Management</Text>
                <Text>to</Text>

                <Text fontSize='xl'>Web3 Developer / Consultant / Mentor</Text>

            </GridItem>
        </Grid>
    )
}