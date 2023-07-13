import { Tabs, TabList, TabPanels, Tab, TabPanel, Flex, Heading} from '@chakra-ui/react';
import Carousel from './Carousel';
import ProjectsJSON from '../data/Projects.json';

export default function Projects () {

    return (
        <Flex             
            // border='solid white' 
            borderRadius='10px'
            width='100%' 
            justify='center'
            backgroundColor='black'
            color='white'
            marginBottom='10px'
            flexDirection='column'
            fontFamily='font1'
        >
            <Heading 
                alignSelf='center'
                padding='10px'
            >
                Projects
            </Heading>
            <hr />
            <Flex 
                // border='solid aqua' 
                width='100%' 
                justify='center'
                backgroundColor='black'
                color='white'
                marginBottom='10px'
            >

                <Tabs 
                    marginTop='20px' 
                    // border='solid orange'
                    width='1000px'
                    isFitted variant='enclosed'
                    defaultIndex={0}
                    color='brand.100'
                    // colorScheme='purple'
                >
                    <TabList 
                        justifyContent='space-evenly'
                    >
                        <Tab 
                            fontSize='sm'
                            _selected={{ color: 'brand.100', bg: 'brand.300' }}
                        >
                            Web3
                        </Tab>
                        <Tab 
                            fontSize='sm'
                            _selected={{ color: 'brand.100', bg: 'brand.300' }}

                        >
                            Construction
                        </Tab>
                        {/* <Tab 
                            fontSize='sm'
                            _selected={{ color: 'brand.100', bg: 'brand.300' }}

                        >
                            React & JS
                        </Tab> */}
                    </TabList>    

                        <TabPanels >
                            <TabPanel>
                                <Carousel 
                                    slides={ProjectsJSON[0].web3Projects} 
                                />
                            </TabPanel>
                            <TabPanel>
                                <Carousel 
                                    slides={ProjectsJSON[1].constructionProjects} 
                                />
                            </TabPanel>
                            <TabPanel>
                                <Carousel 
                                    slides={ProjectsJSON[2].reactJsProjects}
                                />
                            </TabPanel>
                        </TabPanels>    
                        
                </Tabs>
            </Flex>
        </Flex>
    )
}