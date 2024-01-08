import React, { useState } from 'react'
import {Routes, Route} from 'react-router-dom';
import Dashboard from "./Dashboard";
import Login from './Login';

function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Login  />}/>
      <Route path='/dashboard-USR7892XZ' element={<Dashboard />}/>
    </Routes>
    
  );
}

export default App;