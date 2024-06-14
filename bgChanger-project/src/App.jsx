import React, { useState } from 'react'

const App = () => {
 const [color,setColor] =  useState("olive")
  return (
    <div className='w-full h-screen flex items-center justify-center' style={{backgroundColor:color}}>
      <div className='bg-white px-3 py-2 rounded-full w-fit bottom-8 absolute flex gap-5  '>
        <button onClick={()=>setColor("Red")} className='px-4 py-2 rounded-full text-white bg-red-600'>Red</button>
        <button onClick={()=>setColor("green")} className='px-4 py-2 rounded-full text-white bg-green-600 '>Green</button>
        <button onClick={()=>setColor("blue")} className='px-4 py-2 rounded-full text-white bg-blue-600 '>Blue</button>
        <button onClick={()=>setColor("violet")} className='px-4 py-2 rounded-full text-white bg-violet-600 '>Violet</button>
        <button onClick={()=>setColor("yellow")} className='px-4 py-2 rounded-full text-white bg-yellow-600'>Yellow</button>
        <button onClick={()=>setColor("gray")} className='px-4 py-2 rounded-full text-white bg-gray-600 '>Gray</button>
        <button onClick={()=>setColor("teal")} className='px-4 py-2 rounded-full text-white bg-teal-600'>Teal</button>
        <button onClick={()=>setColor("pink")} className='px-4 py-2 rounded-full text-white bg-pink-600 '>Pink</button>
        <button onClick={()=>setColor("indigo")} className='px-4 py-2 rounded-full text-white bg-indigo-600'>Indigo</button>
      </div>
    </div>
  )
}

export default App