import { Tabs, TabList, TabPanels, Tab, TabPanel, Flex, Heading} from '@chakra-ui/react';
import Carousel from './Carousel';
import ProjectsJSON from './Projects.json';

export default function Projects () {
    // console.log(ProjectsJSON[0].web3Projects)
    //"https://via.placeholder.com/150"

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
        >
            <Heading alignSelf='center'>
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
                >
                    <TabList justifyContent='space-evenly' >
                        <Tab fontSize='sm'>Web3</Tab>
                        <Tab fontSize='sm'>Construction</Tab>
                        <Tab fontSize='sm'>React</Tab>
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