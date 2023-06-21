import { Flex, Box, Center, HStack, Image, Icon} from '@chakra-ui/react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { BsTelegram } from 'react-icons/bs';

import Menu from './Menu';

export default function Navbar () {

    return (
        <Flex
            border='solid blue' 
            background='grey'
            justify='space-between'
            height='80px'
            position='sticky'
            zIndex='1'
            top='0'
            padding='5px'
        >
            <Box boxSize='65px' border='solid yellow'>
                <Image src='' alt='Dan Abramov' borderRadius='full' fallbackSrc='https://via.placeholder.com/150'/>
            </Box>
            <Flex 
                border='solid purple'
                direction='column'
                width='50%'
            >
                <Center>Connect with me</Center>
                <HStack
                    justify='space-evenly'
                    border='solid aqua'
                    height='100vh'
                >
                    <Box>
                        {AiFillLinkedin()}
                    </Box>
                    <Box>
                        {AiFillGithub()}
                    </Box>
                    <Box>
                        {BsTelegram()}
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