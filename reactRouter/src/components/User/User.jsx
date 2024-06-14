import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userid} = useParams()
  return (
    <div className='text-center p-4 bg-gray-700 text-white text-3xl'>User: {userid} </div>
  )
}

export default User