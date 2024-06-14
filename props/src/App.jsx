import React from 'react'
import { Card } from './components/Card'

const App = () => {

  const btnHandler =()=>{
    alert("hello")
  }

  return (
    <div className='p-20 flex gap-10 bg-zinc-900 h-screen w-screen'>
      <Card imgSrc="https://plus.unsplash.com/premium_photo-1707932484405-d8cac82c76c4?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" userName="Nandan" btnText="View me" btnHandler={btnHandler}/>
      <Card imgSrc="https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" userName="Namrata" btnHandler={btnHandler}  />
    </div>
  )
} 

export default App

