import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncGetProducts } from '../actions/productAction'

const Products = () => {

  const {products} = useSelector((state)=> state.productReducer)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(asyncGetProducts())
  },[])

  return (
    <div className='min-h-screen w-screen bg-zinc-900'>
    <h1 className='font-mono font-semibold text-4xl pt-10 text-zinc-400 px-10'>Products List</h1>
    <div>
    <ul className='mt-5'>
         {products && products.map((product)=>(
          <li>
            <h1 className='px-10 text-zinc-500 mt-1 font-mono ' key={product.id}>{product.title} <span onClick={()=> handleDelete(product.id)} className='ml-2 cursor-pointer font-mono font-bold text-zinc-300 text-xl'>X</span></h1>
          </li>
         ))}
        </ul>
    </div>
  </div>
  )
}

export default Products