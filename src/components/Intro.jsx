import { Grid, GridItem, Image, Heading, Text, Box, Center, VStack, Stack, Flex } from '@chakra-ui/react'

export default function Intro() {

    return (
        <Grid 
            templateAreas={`"greeting image tech"
                            "description description description"`}
            gridTemplateRows={'50% 50%'}
            gridTemplateColumns={'50% 30% 20%'}
            border='solid blue' 
            marginTop='20px' 
            height='500px'
            width='100%'
        >
            <GridItem 
                border='solid blue' 
                display='flex' 
                flexDirection='column' 
                justifyContent='space-evenly' 
                justifySelf='center'
                pl='2' 
                bg='' 
                area={'greeting'} 
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
            </GridItem>

            <GridItem 
                // padding='5px'
                bg='' 
                area={'image'} 
                border='solid blue'
                justifySelf='left'
                
            >
                <Center justifySelf='center'>
                    <Image 
                        src='https://via.placeholder.com/250'
                        // boxSize='140px'
                        // objectFit='cover'
                        alt='Profile Picture'
                        fallbackSrc='https://via.placeholder.com/150'
                    />
                </Center>
            </GridItem>

            <GridItem  border='solid blue' >

                    <Flex flexDirection='column' justify='space-evenly' align='center' height='100%' >
                        <Box>Tech1</Box>
                        <Box>Tech2</Box>
                        <Box>Tech3</Box>
                        <Box>Tech4</Box>
                    </Flex>

            </GridItem>

            <GridItem pl='2' bg='' area={'description'} textAlign='center' border='solid blue'>
                <Text fontSize='xl'>From Civil Engineering Construction Management</Text>
                <Text>to</Text>

                <Text fontSize='xl'>Web3 Developer / Consultant / Mentor</Text>

            </GridItem>
        </Grid>
    )
}