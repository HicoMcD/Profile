import { Container, Flex, Text, HStack } from '@chakra-ui/react';

export default function Footer () {

    return (
        <Flex 
            // border='solid aqua'
            padding='10px'
            align='center'
            justify='center'
            height='70px'  
            backgroundColor='black'
            color='white'
            fontFamily='font1'
        >

            <Text>
                &Beta;uilt by Hico 2023</Text>
            {/* <Text>
                Repo for this site
            </Text> */}
        </Flex>
    )
}