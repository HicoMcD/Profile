// import { useState } from 'react'
// import './App.css'
import { Flex, Container } from '@chakra-ui/react'

import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Navbar />
        <Flex direction='column' align='center' border='solid red' min-height= '100vh' margin= '10px' padding= '10px'>
          <Intro />
          <Projects />
        </Flex>
      <Footer />
    </>
  )
}

export default App
