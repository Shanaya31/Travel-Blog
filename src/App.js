import React from 'react';
import Navbar from 'C:/Navbar';
import Home from 'C:/Home';
import { Routes, Route } from 'react-router-dom';
import Services from 'C:/Services';
import SignUp from 'C:/SignUp';
import Destination from './Destination';
import ScrollToTop from 'C:/Users/SHANAYA/travelwebsite/src/Components/ScrollToTop.js';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <ScrollToTop>
        <Routes>
          <Route path='/Home' exact element={<Home />} />
          <Route path='/services' exact element={<Services />} />
          <Route path='/sign-up' exact element={<SignUp />} />
          <Route path='/services/activity' element={<Destination />} />
        </Routes>
      </ScrollToTop>
    </div>
  );
}

export default App;