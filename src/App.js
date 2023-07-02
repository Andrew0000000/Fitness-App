import React from 'react';
import './App.css'  ;
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Home from './Pages/Home';
import Progress from  './Pages/Progress';
import Footer from './Components/Footer';
import AppBar from './Components/AppBar';

const App = () => {
  return (
    <div>
      <Box width='400px' sx={{ width: { xl: '1488px' }}} m='auto'>
        <AppBar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Home' element={<Home />}/>
          <Route path='/Progress' element={<Progress />}/>
        </Routes>
        <Footer />
      </Box>
    </div>
  )
}

export default App