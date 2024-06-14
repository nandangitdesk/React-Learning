import React, { useEffect, useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import {add} from "../store/CartSlice"
import { fetchProducts } from '../store/ProductSlice'
import { STATUSES } from '../store/ProductSlice'

const Products = () => {

   const dispatch = useDispatch()
   const {data:products,status} = useSelector((state)=> state.product)

    // const [products, setProducts] = useState([])

    useEffect(()=>{

       dispatch(fetchProducts()) 

        // const fetchProducts = async ()=>{
        //     const res = await fetch("https://fakestoreapi.com/products")
        //     const data = await res.json()
            
        //     setProducts(data)
        // } 
        // fetchProducts()

    },[])


   const handleAdd = (product)=>{
        dispatch(add(product))
   }

   if(status === STATUSES.LOADING){
      return <h2 className='text-3xl font-mono font-extrabold text-center'>Loading...</h2>
   }

   if (status === STATUSES.ERROR) {
     return <h2 className='text-center text-4xl font-mono font-extrabold'>Something went wrong..</h2>
   }

  return (
    <div className='h-full w-full mt-5 flex items-center justify-between flex-wrap gap-10'>
      {products.map((product)=>(
         <div key={product.id} className='card w-56 h-80 shadow bg-white rounded-lg flex flex-col items-center justify-center p-4'>
         <div className='img-div  h-32 w-48 flex items-center justify-center '>
           <img className='h-full w-full object-contain' src={product.image} alt="" />
         </div>
         <h1 className='text-center font-mono mt-5 text-zinc-700 leading-4 text-sm'>{product.title}</h1>
         <p className='font-mono text-sm font-semibold mt-2'>${product.price}</p>
         <button onClick={()=> handleAdd(product)} className='mt-3 px-3 py-2 bg-blue-600 text-white rounded-md border-none text-sm hover:bg-blue-800 font-mono '>Add to cart</button>
        </div>
      ))}
    </div>
  )
}

export default Products