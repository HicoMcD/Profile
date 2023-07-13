import { Flex, HStack } from '@chakra-ui/react';

export default function Footer () {

    return (
        <Flex 
            border='solid aqua'
            align='center'
            justify='space-evenly'
            direction='column'
            height='70px'  
            width='100%'
            backgroundColor='black'
            color='white'
        >
            <HStack>
                {/* Eth utils */}
            </HStack>

            <div>FOOTER</div>
        </Flex>
    )
}