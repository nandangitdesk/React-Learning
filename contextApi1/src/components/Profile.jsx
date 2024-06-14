import React, { useContext } from 'react'
import userContext from '../context/Context'

const Profile = () => {
    const {user} = useContext(userContext)
    if (!user) return <div className='p-10 '>Please Login</div>
  return (
    <div className='mt-4 p-10 text-white text-xl'>
      Hey 👋🏻 {user.username}
    </div>
  )
}

export default Profile