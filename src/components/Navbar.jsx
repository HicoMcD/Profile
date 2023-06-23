import { Flex, Box, Center, HStack, Image, Icon, Link, Show, Hide} from '@chakra-ui/react';
import { BsTelegram, BsLinkedin, BsGithub } from 'react-icons/bs';

import Menu from './Menu';

export default function Navbar () {

    return (
        <Flex
            // border='solid blue' 
            background='black'
            color='white'
            justify='space-between'
            height='80px'
            position='sticky'
            zIndex='1'
            top='0'
            padding='5px'
        >
            <Box 
                boxSize='65px' 
                // border='solid yellow'
            >
                <Image src='' alt='Dan Abramov' borderRadius='full' fallbackSrc='https://via.placeholder.com/150'/>
            </Box>
            <Flex 
                border='solid 5px grey'
                direction='row'
                width='50%'
                justify='center'
                borderRadius='20px'
            >
                <Hide below='md'>
                    <Center pl='50px'>Connect with me</Center>
                </Hide>
                <HStack
                    justify='space-around'
                    // border='solid aqua'
                    // alignSelf='center'
                    // height='100vh'
                    width='80%'
                    // align='center'
                    // paddingLeft='28px'
                >

                    <Box 
                        // border='solid red' 
                        boxSize='50px'
                        // justifyContent='center'
                    >
                        <Link href='https://www.linkedin.com/' target='_blank' rel="noreferrer">
                            <BsLinkedin size='3em' style={{ borderRadius: '50%'}} />
                        </Link> 
                    </Box>                    
                    <Box 
                        // border='solid red' 
                        boxSize='50px'
                    >
                        <Link href='https://www.github.com/' target='_blank' rel="noreferrer" >
                            <BsGithub size='3em' />
                        </Link> 
                    </Box> 
                    <Box 
                        // border='solid red' 
                        boxSize='50px'
                    >
                        <Link href='https://www.telegram.com/' target='_blank' rel="noreferrer" >
                            <BsTelegram size='3em' />
                        </Link> 
                    </Box>
                </HStack>
            </Flex>
            <Menu />

            
        </Flex>
    )
}

            {/* <Flex
                flex='1' 
                border='solid orange' 
                // backgroundImage='/CigarHomonid.png'
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                bgSize='cover'
            >
                NavBar
            </Flex> */}