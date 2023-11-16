import React from 'react'
import Header from './Header'
import Home from './Home'
import Skills from './Skills'
import Projects from './Projects'
import About from './About'


import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
const Wrapper = () => {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
       <Route  path='/' element={<Home/>} />
       <Route  path='/home' element={<Home/>} />
       <Route  path='/about' element={<About/>} />
       <Route  path='/skills' element={<Skills/>} />
       <Route  path='/projects' element={<Projects/>} />
    
        </Routes>
    </Router> 
    </>
  )
}

export default Wrapper