import React from 'react'
import Navbar from './Navbar'
import { Routes,Route } from 'react-router-dom'
import About from './View/About'
import Cv from './View/Cv'
import Home from './View/Home'
import Service from './View/Service'
import Footer from './View/Footer'



const App = () => {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/about' element={<About />}/>  
      <Route path='/cv' element={<Cv />}/>
      <Route path='/service' element={<Service />}/>
      <Route path='/' element={<Home />}/>
    </Routes>
    <Footer/>
 
    </> 
  )
}

export default App
