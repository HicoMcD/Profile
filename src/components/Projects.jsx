import { Tabs, TabList, TabPanels, Tab, TabPanel, Flex, Heading} from '@chakra-ui/react';
import Carousel from './Carousel';
import ProjectsJSON from '../data/projects.json';

export default function Projects () {

    const font = 'font8';

    return (
        <Flex             
            borderRadius='10px'
            width='100%' 
            justify='center'
            backgroundColor='brand.1000'
            color='white'
            marginBottom='10px'
            flexDirection='column'
            fontFamily={font}
        >
            <Heading 
                alignSelf='center'
                padding='10px'
                fontFamily={font}
            >
                Featured Projects
            </Heading>
            <hr />
            <Flex 
                width='100%' 
                justify='center'
                backgroundColor='brand.1000'
                color='white'
                marginBottom='10px'
            >
                <Tabs 
                    marginTop='20px' 
                    width='1000px'
                    isFitted 
                    variant='soft-rounded'
                    defaultIndex={0}
                >
                    <TabList 
                        justifyContent='space-evenly'
                    >
                        <Tab 
                            marginLeft='10px'
                            fontSize='lg'
                            _selected={{ color: 'brand.100', bg: 'brand.300' }}
                        >
                            Web3
                        </Tab>
                        <Tab 
                            marginRight='10px'
                            fontSize='lg'
                            _selected={{ color: 'brand.100', bg: 'brand.300' }}
                        >
                            AEC Industry
                        </Tab>
                    </TabList>    
                        <TabPanels >
                            <TabPanel>
                                <Carousel 
                                    slides={ProjectsJSON[0].web3Projects} 
                                />
                            </TabPanel>
                            <TabPanel>
                                <Carousel 
                                    slides={ProjectsJSON[0].aecProjects} 
                                />
                            </TabPanel>
                        </TabPanels>    
                </Tabs>
            </Flex>
        </Flex>
    )
}