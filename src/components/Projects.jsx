import { Tabs, TabList, TabPanels, Tab, TabPanel, Flex} from '@chakra-ui/react';
import Carousel from './Carousel';
import ProjectsJSON from './Projects.json';

export default function Projects () {
    // console.log(ProjectsJSON[0].web3Projects)

    return (
        <Flex 
            border='solid aqua' 
            width='100%' 
            justify='center'
            backgroundColor='black'
            color='white'
            marginBottom='10px'
            // boxSize={{ base: '100%' }}
        >

            <Tabs 
                marginTop='20px' 
                border='solid orange'
                // height='500px'
                // width='100%'
                isFitted variant='enclosed'
                defaultIndex={0}
                // w='360px'
                
            >
                <TabList justifyContent='space-evenly' >
                    <Tab fontSize='sm'>Web3 Projects</Tab>
                    <Tab fontSize='sm'>Construction Projects</Tab>
                    <Tab fontSize='sm'>React Projects</Tab>
                    {/* <Tab fontSize='sm'>Current Projects</Tab> */}
                </TabList>    

                    <TabPanels >
                        <TabPanel>
                        {/* <p>one!</p> */}
                            <Carousel slides={ProjectsJSON[0].web3Projects} />
                        </TabPanel>
                        <TabPanel>
                        {/* <p>two!</p> */}
                            <Carousel slides={ProjectsJSON[1].constructionProjects} />
                        </TabPanel>
                        <TabPanel>
                            <Carousel slides={ProjectsJSON[2].reactJsProjects}/>
                        </TabPanel>
                        {/* <TabPanel> */}
                            {/* <Carousel slides={ProjectsJSON[2].reactJsProjects}/> */}
                        {/* </TabPanel> */}
                    </TabPanels>    

            </Tabs>

        </Flex>
    )
}