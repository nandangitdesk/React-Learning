import React from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

const App = () => {
  return (
    <div className='p-10 bg-zinc-500 h-screen w-full text-white '>
      <h1>Todo app using redux-toolkit</h1>
      <AddTodo/>
      <Todos/>
    </div>
  )
}

export default App