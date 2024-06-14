import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {

  const items = useSelector((state)=> state.cart)

  return (
    <div className='p-4 w-full bg-zinc-200 flex items-center justify-between fixed'>
        <div className='text-xl font-mono font-extrabold ml-32'>REDUX STORE</div>
        <div className='flex items-center justify-between gap-10 mr-32'>
         <NavLink  className={"text-zinc-500 font-mono font-medium"}
         style={(e)=>{
            return {color: e.isActive ? "black" : "" }
         }}to="/">
            Home
         </NavLink>

         <NavLink  className={"text-zinc-500 font-mono font-medium"}
         style={(e)=>{
            return {color: e.isActive ? "black" : "" }
         }}to="/cart">
            Cart
         </NavLink>
         
         <p className='text-zinc-700 font-mono font-semibold bg-zinc-300 rounded-full px-3 py-2 '>Cart items : {items.length}</p>
        </div>
    </div>
  )
}

export default Navbar