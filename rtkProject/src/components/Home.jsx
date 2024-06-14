import React from 'react'
import Products from './Products'

const Home = () => {
  return (
    <div className='w-full min-h-screen bg-zinc-100 px-32 py-10'>
     <h1 className='font-mono font-semibold text-2xl text-center text-zinc-800'>Welcome to Redux Store </h1>
     <p className='font-mono text-zinc-600 mt-4 text-xl'>Products</p>
     <Products/>
    </div>
  )
}

export default Home