  import React from 'react'
  import {NavLink , Routes ,Route} from "react-router-dom"
  import Home from './components/Home'
  import Products from './components/Products'
  import Users from './components/Users'

  const App = () => {
    return (
      <div className='h-screen w-screen'>
        <nav className=' flex gap-10 py-10 justify-center bg-zinc-900'>
        <NavLink  className={"text-zinc-500 font-mono font-medium"}
          style={(e)=>{
              return {color: e.isActive ? "white" : "" }
          }}to="/">
              Home
          </NavLink>
          <NavLink  className={"text-zinc-500 font-mono font-medium"}
          style={(e)=>{
              return {color: e.isActive ? "white" : "" }
          }}to="/users">
              Users
          </NavLink>
          <NavLink  className={"text-zinc-500 font-mono font-medium"}
          style={(e)=>{
              return {color: e.isActive ? "white" : "" }
          }}to="/products">
              Products
          </NavLink>
        </nav>
        <hr />

        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/users' element={<Users/>} ></Route>
          <Route path='/products' element={<Products/>} ></Route>
        </Routes>
      </div>
    )
  }

  export default App