import { Flex, Box, Center, HStack, Image, Link, Hide, Heading} from '@chakra-ui/react';
import Menu from './Menu';

export default function Navbar () {

    return (
        <Flex
            background='black'
            color='white'
            justify='space-between'
            height='80px'
            position='sticky'
            zIndex='1'
            top='0'
            padding='5px'
            boxShadow='0 0 5px 5px #453885' //brand.300
        >
            <Box 
                boxSize='65px' 
            >
                <Image 
                    src='./ppic.jpg' 
                    alt='Hico' 
                    borderRadius='20px' 
                    fallbackSrc='https://via.placeholder.com/150'
                />
            </Box>
            <Flex 
                border='solid 2px'
                borderColor='brand.300'
                direction='row'
                width='60%'
                justify='center'
                align='center'
                borderRadius='10px'
            >
                <Hide below='md'>
                    <Center 
                        pl='50px' 
                        textAlign='center' 
                        // border='solid yellow'
                        align='center'
                    >
                        <Heading size='md'>
                            Connect with me
                        </Heading>
                    </Center>
                </Hide>
                <HStack
                    justify='space-around'        
                    width='100%'
                >
                    <Box 
                        // border='solid red' 
                        boxSize='50px'
                    >
                        <Link 
                            href='https://www.telegram.com/' 
                            target='_blank' rel="noreferrer" 
                        >
                            <Image 
                                src='./logos/telegram.svg' 
                                alt='more text' 
                                p='1px' 
                                backgroundColor='white' 
                                borderRadius='50%' 
                            />
                        </Link> 
                    </Box>
                    <Box 
                        // border='solid red' 
                        boxSize='50px'
                    >
                        <Link 
                            href='https://www.linkedin.com/' 
                            target='_blank' 
                            rel="noreferrer">
                            <Image 
                                src='./logos/linkedin.svg' 
                                alt='more text' 
                                borderRadius='50%' 
                                p='1px' 
                                backgroundColor='white' 
                            />
                        </Link> 
                    </Box>                    
                    <Box 
                        boxSize='50px'
                    >
                        <Link 
                            href='https://www.github.com/' 
                            target='_blank' 
                            rel="noreferrer" >
                            <Image 
                                src='./logos/github.svg' 
                                alt='more text' p='1px' 
                                backgroundColor='white' 
                                borderRadius='50%' 
                            />
                        </Link> 
                    </Box> 
                </HStack>
            </Flex>
            <Menu />
        </Flex>
    )
}
