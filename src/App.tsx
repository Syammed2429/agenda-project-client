import { Box } from '@chakra-ui/react';
import React, { FC } from 'react';
import './App.css';
import { Layout } from './components/Layout/Layout';

const App: FC = () => {

  return (
    <Box className="App">
      <Layout />
    </Box>
  );
}

export default App;
