import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, extendTheme, ThemeConfig, ColorModeScript } from '@chakra-ui/react'


import App from './App';


const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
}

// 3. extend the theme
const theme = extendTheme({ config })


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

