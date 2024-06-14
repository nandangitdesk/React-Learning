import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import {userDelete} from "../features/UserSlice"

const Users = () => {
   
  const users = useSelector((state)=> state.userReducer.users)
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(userDelete(id));
};
  
  return (
    <div className='h-screen w-screen bg-zinc-900'>
      <h1 className='font-mono font-semibold text-4xl pt-10 text-zinc-400 px-10'>Users List</h1>
      <div>
        <ul className='mt-5'>
         {users.map((user)=>(
          <li>
            <h1 className='px-10 text-zinc-500 mt-1 font-mono ' key={user.id}>{user.name} <span onClick={()=> handleDelete(user.id)} className='ml-2 cursor-pointer font-mono font-bold text-zinc-300 text-xl'>X</span></h1>
          </li>
         ))}
        </ul>
      </div>
    </div>
  )
}

export default Users