import React from 'react'
import Home from './components/subpages/Home/home.component.jsx'
import Login from './components/subpages/login/login.component.jsx'

import './App.css'
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <Routes>      
    <Route path='/' element={<Home />} /> 
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default App
