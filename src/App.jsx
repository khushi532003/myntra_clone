import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer'
import BellIcon from './Components/BellIcon'
import Products from './Pages/Products/Products'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <BellIcon/>
      <Navbar/>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </BrowserRouter>
      {/* <Home/> */}
      {/* <Products/> */}
      <Footer/>
    </div>
  )
}

export default App
