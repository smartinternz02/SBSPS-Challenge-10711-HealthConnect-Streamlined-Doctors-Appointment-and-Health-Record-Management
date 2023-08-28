import React from 'react'
import './App.css'

import Lnading from './Screens/Lnading'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './Component/Nav'
import Login from './Screens/Login'
import Register from './Screens/Register'
import AssessmentCarousel from './Screens/Assessment'
import PsychologistFinder from './Screens/PsychologistFinder';


export default function App() {
  return (

    <BrowserRouter>
    <Nav></Nav>
    <Routes>
      <Route path='/'element={<Lnading/>}/>
      <Route path='/Login'element={<Login/>}/>
      <Route path='/Register'element={<Register/>}/>
      <Route path='/Assessment'element={<AssessmentCarousel/>}/>
    </Routes>
    
    </BrowserRouter>


  )
}

