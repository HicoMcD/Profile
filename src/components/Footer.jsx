import { Flex, Text, Image, Link } from '@chakra-ui/react';

export default function Footer () {

    return (
        <Flex 
            // border='solid aqua'
            flexDirection='column'
            padding='10px'
            align='center'
            justify='center'
            height='70px'  
            backgroundColor='black'
            color='white'
            fontFamily='font1'
        >

            <Text>
                &#127959;
                &Beta;uilt by Hico 2023
                &#127959;
            </Text> 
            <Link
                href='https://www.github.com/' 
                target='_blank' rel="noreferrer"
            > 
                <Image 
                    src='./logos/github.svg' 
                    alt='Repository for the webpage'
                    margin='5px'
                    width='20px' 
                    backgroundColor='white' 
                    borderRadius='50%' 
                />
            </Link>

        </Flex>
    )
}