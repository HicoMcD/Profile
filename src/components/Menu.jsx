import { HamburgerIcon } from '@chakra-ui/icons'
import { useDisclosure, Button, Center, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter, } from '@chakra-ui/react';
import * as React from 'react';
import { BsList } from 'react-icons/bs';

export default function Menu () {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef()

//   const handleClick = () => {
//     onOpen()
//   }

  return (
    <Center>

      <Button ref={btnRef} onClick={onOpen}>
        <BsList size='3em'/>
      </Button>

      <Drawer
        isOpen={isOpen}
        placement='top'
        onClose={onClose}
        finalFocusRef={btnRef}
        size='full'
      >
        <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>
                    HEADER
                </DrawerHeader>
                <DrawerBody>
                    Link 1
                    Link 2
                </DrawerBody>
                <DrawerFooter>
                    FOOTER
                </DrawerFooter>
            </DrawerContent>

      </Drawer>

    </Center>
  )
}
