import { Flex, HStack } from '@chakra-ui/react';

export default function Footer () {

    return (
        <Flex 
            border='solid aqua'
            align='center'
            justify='space-evenly'
            direction='column'
            // marginTop='10px' 
            height='70px'  
            width='100%'
            backgroundColor='black'
            color='white'
        >
            <HStack>
            <div>EVM Utilities</div>
            <div>BlockNumber</div>
            <div>ETH Price</div>
            <div>ETH Gas Fees</div>
            </HStack>

            <div>FOOTER</div>
        </Flex>
    )
}