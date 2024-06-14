import React, { useCallback, useEffect, useRef, useState } from 'react'


const App = () => {
  
   const [length , setLength] = useState(8)
   const [numberAllowed , setNumberAllowed] = useState(false)
   const [charAllowed , setCharAllowed] = useState(false)
   const [password , setPassword] = useState("")
   const passwordRef = useRef(null)

   let passwordGenerator = useCallback(() => {

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if(numberAllowed) str+= "0123456789"

    if(charAllowed) str+= "~!@#$%^&*_+:"

    for (let i = 0; i < length; i++) {
     
     let char = Math.floor((Math.random()*str.length +1))
      
      pass +=str.charAt(char)
    }
     setPassword(pass)
   } , [length,numberAllowed,charAllowed,setPassword])


   const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,20) //for selcting particular char
    window.navigator.clipboard.writeText(password)
    
   },[password])

   useEffect(()=>{
    passwordGenerator()
   },[length,charAllowed,numberAllowed,passwordGenerator])

  return (
    <div className='bg-zinc-900 h-screen w-full  font-mono'>
           <h1 className='text-4xl font-semibold text-center  p-10 text-zinc-500'>Password Generator (*)</h1>
           <div className='flex items-center justify-center w-1/3 p-5 bg-zinc-800 m-auto rounded-lg border-[2px] border-zinc-700 flex-col'>
            <div className='flex items-center gap-1 justify-center w-full'>
              <input ref={passwordRef} type="text" placeholder='generate your password...' value={password} className='px-3 py-2 bg-transparent selection:bg-zinc-300 border-[2px] border-zinc-700 rounded-md w-full outline-none text-zinc-500 text-sm' readOnly />
              <button onClick={copyPasswordToClipboard} className='px-2 py-2 bg-zinc-700 rounded-md text-zinc-400 text-sm hover:bg-zinc-600'>Copy</button>
            </div>
            <div className='mt-10 flex items-center justify-center gap-10'>
              <div className='flex items-center justify-center gap-2'>
                <input type="range" min={8} max={30} value={length} onChange={(e)=> setLength(e.target.value)} className='appearance-none  bg-zinc-700 h-0.5 outline-none cursor-pointer accent-zinc-500 range'/>
                <label className='text-sm text-zinc-400 whitespace-nowrap '>Length : {length}</label>
              </div>
              <div className='flex items-center justify-center gap-2'>
                <input type="checkbox" id='numberInput' defaultChecked ={numberAllowed} onChange={()=> setNumberAllowed((prev)=> !prev)} className=' accent-zinc-500 cursor-pointer ' /> 
                <label className='text-sm text-zinc-400'>Numbers</label>
              </div>
              <div className='flex items-center justify-center gap-2'>
                <input type="checkbox" id='characterInput' defaultChecked ={charAllowed} onChange={()=> setCharAllowed((prev)=> !prev)} className=' accent-zinc-500 cursor-pointer ' /> 
                <label className='text-sm text-zinc-400'>Characters</label>
              </div>
            </div>
           </div>
    </div>
  )
}

export default App