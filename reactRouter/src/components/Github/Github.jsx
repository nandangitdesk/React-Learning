import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //   fetch("https://api.github.com/users/nandangitdesk")
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //     setData(data)
    //   })
    // },[])
  return (
    <div className='p-5 flex items-center justify-center gap-10 bg-gray-600 text-center text-white text-2xl'>Github Followers : {data.followers}
    <img src={data.avatar_url} alt="github profile picture" width={300} className='rounded-lg' />
    </div>
  )
}

export default Github

export const githubInfoLoader = async ()=>{
  const reponse = await fetch("https://api.github.com/users/nandangitdesk")
  return reponse.json()
}