import { Flex, Box, Center, HStack, Image, Link, Hide, Heading} from '@chakra-ui/react';
import Menu from './Menu';

export default function Navbar () {

    const font = 'font8';

    return (
        <Flex
            background='brand.1000'
            color='white'
            justify='space-between'
            height='80px'
            position='sticky'
            zIndex='1'
            top='0'
            padding='5px'
            boxShadow='0 0 5px 5px #453885'
            fontFamily='font8'
        >
            <Box 
                boxSize='60px' 
                margin='2px'
            >
                <Link
                    href=''
                >
                    <Image 
                        src='./profilePic.jpg' 
                        alt='Hico profile picture' 
                        borderRadius='20px' 
                        fallbackSrc='https://via.placeholder.com/150'
                    />
                </Link>
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
                        align='center'
                    >
                        <Heading 
                            size='md'
                            fontFamily={font}
                        >
                            Connect with me
                        </Heading>
                    </Center>
                </Hide>
                <HStack
                    justify='space-around'        
                    width='100%'
                >
                    <Box 
                        boxSize='50px'
                    >
                        <Link 
                            href='https://t.me/HicoMcD' 
                            target='_blank' rel="noreferrer" 
                        >
                            <Image 
                                src='./logos/telegram.svg' 
                                alt='Telegram logo' 
                                p='1px' 
                                backgroundColor='white' 
                                borderRadius='50%' 
                            />
                        </Link> 
                    </Box>
                    <Box 
                        boxSize='50px'
                    >
                        <Link 
                            href='https://www.linkedin.com/in/hico-mc-donald-97b97864/' 
                            target='_blank' 
                            rel="noreferrer"
                        >
                            <Image 
                                src='./logos/linkedin.svg' 
                                alt='LinkedIn logo' 
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
                            href='https://github.com/HicoMcD' 
                            target='_blank' 
                            rel="noreferrer" >
                            <Image 
                                src='./logos/github.svg' 
                                alt='Github logo' 
                                p='1px' 
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
