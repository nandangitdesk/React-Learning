import React, { useContext, useState } from 'react'
import userContext from '../context/Context'


const Login = () => {
    const [username,setUsername] = useState("")
    const [password , setPassword] = useState("")
    const {setUser} = useContext(userContext)

    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username,password})
    }

  return (
    <div className='p-10 flex gap-3 flex-col'>
        <h2 className='text-white text-2xl'>Login</h2>
        
        <div className='flex gap-5'>
        <input className='border border-zinc-700 bg-transparent rounded-md p-2' type="text" placeholder='username' value={username} onChange={(e)=> setUsername(e.target.value)} />
       <input className='border border-zinc-700 bg-transparent rounded-md p-2' type="text" placeholder='password' value={password} onChange={(e)=> setPassword(e.target.value)} />
       <button onClick={handleSubmit} className='px-3 py-2 rounded-md bg-blue-500 border-none text-white'>Login</button>
        </div>
    </div>
  )
}

export default Login