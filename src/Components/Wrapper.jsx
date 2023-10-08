import React from 'react'
import Header from './Header'
import Home from './Home'
import Skills from './Skills'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
const Wrapper = () => {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
       <Route  path='/home' element={<Home/>} />
       <Route  path='/skills' element={<Skills/>} />


        </Routes>
    </Router>
    </>
  )
}

export default Wrapper