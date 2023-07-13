// import './App.css'
import { Flex } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {

  return (
    <Flex 
      direction='column'
      backgroundColor='brand.200'
    >
      <Navbar />
        <Flex 
          direction='column' 
          align='center' 
          min-height= '100vh' 
          padding= '10px'
        >
          <Intro />
          <Projects />
        </Flex>
      <Footer />
    </Flex>
  )
}

export default App
