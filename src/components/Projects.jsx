import { Tabs, TabList, TabPanels, Tab, TabPanel, Flex} from '@chakra-ui/react';
import Carousel from './Carousel';
import ProjectsJSON from './Projects.json';

export default function Projects () {
    // console.log(ProjectsJSON)

    return (
        <Flex border='solid aqua' width='100%' justify='center'>

        <Tabs 
            marginTop='20px' 
            border='solid orange'
            // height='500px'
            // width='100%'
            isFitted variant='enclosed'
            defaultIndex={0}
        >
            <TabList justifyContent='space-evenly'>
                <Tab fontSize='sm'>Web3 Projects</Tab>
                <Tab fontSize='sm'>Construction Projects</Tab>
                {/* <Tab fontSize='sm'>React Projects</Tab> */}


            </TabList>        
                <TabPanels>
                    <TabPanel>
                    {/* <p>one!</p> */}
                        <Carousel slides={ProjectsJSON[0]} />
                    </TabPanel>
                    <TabPanel>
                    {/* <p>two!</p> */}
                        <Carousel slides={ProjectsJSON[1]} />
                    </TabPanel>
                    {/* <TabPanel> */}

                        {/* <Carousel slides={ProjectsJSON[1]}/> */}
                    {/* </TabPanel> */}
                </TabPanels>        
        </Tabs>



        </Flex>
    )
}