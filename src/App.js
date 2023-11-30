

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import "./App.css"
import PrivacyAndPolicy from './pages/PrivacyAndPolicy';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/privacy-policy' element={ <PrivacyAndPolicy/> } />
      </Routes>
    </div>
  );
}

export default App;
