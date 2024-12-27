import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer'
import BellIcon from './Components/BellIcon'
import Products from './Pages/Products/Products'

function App() {
  return (
    <div>
      <BellIcon/>
      <Navbar/>
      {/* <Home/> */}
      <Products/>
      <Footer/>
    </div>
  )
}

export default App
