import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      100: '#fff',
      200: '#525252',

      300: "#453885",
      400: "#403672",
      500: "#37305A",
      600: "#282537",
      700: "#151519",

      1000: '#000'
    },
  },
  fonts: {
    font1: `'Open Sans', sans-serif`,
    font2: `'Arial', sans-serif`,
    font3: `'Verdana', sans-serif`,  
    font4: `'Brush Script MT', cursive`,  
    font5: `'Courier New', monospace`, 
    font6: `'Garamond', serif`,
    font7: `'Georgia', serif`,
    font8: `'Tahoma', sans-serif`, 
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
