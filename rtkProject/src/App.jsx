import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'

const App = () => {
  return (
    <div className='h-screen w-full'>
         <Navbar/>
         <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
         </Routes>
    </div>
  )
}

export default App