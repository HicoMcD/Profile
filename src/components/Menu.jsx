import { HamburgerIcon, ArrowForwardIcon, WarningTwoIcon } from '@chakra-ui/icons'
import { useDisclosure, Button, Center, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Flex, Container, List, ListItem, ListIcon, UnorderedList, Link, Heading } from '@chakra-ui/react';
import * as React from 'react';
import ProjectsJSON from '../data/projects.json';

export default function Menu () {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const font = 'font8';

  return (
    <Center>
      <Button 
        ref={btnRef} 
        onClick={onOpen}
        m='5px'
      >
        <HamburgerIcon />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='top'
        onClose={onClose}
        finalFocusRef={btnRef}
        size='full'
      >
        <DrawerOverlay />
            <DrawerContent
              fontFamily={font}
              backgroundColor='brand.200'
            >
                <DrawerCloseButton />
                <DrawerHeader>
                    FEATURED PROJECTS
                </DrawerHeader>
                <DrawerBody>
                  <Flex
                    flexDirection='column'
                  >
                    <Container>
                      <Heading>
                        Web3 Projects
                      </Heading>
                      <UnorderedList>
                        <List
                          spacing={3}
                        >
                          {
                            ProjectsJSON[0].web3Projects.map((web3, i) => {
                              let icon = ArrowForwardIcon;

                              if(web3.description !== 'Under Construction') {
                                    icon = ArrowForwardIcon
                              } else {
                                    icon = WarningTwoIcon;
                              }                            
                              return (
                                <ListItem key={i}>
                                  <ListIcon 
                                    as={icon} 
                                    color='brand.300' 
                                  />
                                    <Link  
                                      href={web3.link} 
                                      target='_blank' 
                                      rel="noreferrer" 
                                    >
                                      {web3.label}                                      
                                    </Link>
                                </ListItem>
                              )
                            })
                          }
                        </List>
                      </UnorderedList>
                    </Container>
                    <br />
                    <Container >
                    <Heading>
                        AEC Projects
                    </Heading>
                      <UnorderedList>
                      <List
                          spacing={3}
                        >
                            {
                              ProjectsJSON[0].aecProjects.map((web3, i) => {                             
                                return (
                                  <ListItem key={i}>
                                    <ListIcon 
                                      as={ArrowForwardIcon} 
                                      color='brand.300' 
                                    />
                                      <Link  
                                        href={web3.link} 
                                        target='_blank' 
                                        rel="noreferrer" 
                                      >
                                        {web3.label}                                        
                                      </Link>
                                  </ListItem>
                                )
                              })
                            }
                          </List>
                        </UnorderedList>
                    </Container>
                  </Flex>
                </DrawerBody>
            </DrawerContent>
      </Drawer>
    </Center>
  )
}
