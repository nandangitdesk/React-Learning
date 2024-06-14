import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../store/CartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);

  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  // Compute the total price of the products in the cart
  const totalPrice = products.reduce((total, product) => total + product.price, 0);

  return (
    <div className='w-full min-h-screen bg-zinc-100 pt-24'>
      <h1 className='ml-32 text-2xl font-mono font-bold'>Cart</h1>
      {products.length === 0 ? (
        <p className='ml-32 text-zinc-600 font-mono text-xl mt-2'>Your cart is empty.</p>
      ) : (
        <div>
          {products.map((product) => (
            <div key={product.id} className='w-2/3 bg-white mt-3 rounded-md shadow p-4 mx-auto flex items-center justify-between gap-7'>
              <div className='w-72 h-60'>
                <img className='h-full w-full object-contain' src={product.image} alt="" />
              </div>
              <div>
                <h1 className='font-mono font-semibold text-zinc-900 text-xl'>{product.title}</h1>
                <p className='text-xs text-zinc-500 font-mono'>{product.description}</p>
                <div className='flex items-center gap-10'>
                  <h4 className='font-mono text-zinc-800 mt-2'>${product.price}</h4>
                  <button onClick={() => handleRemove(product.id)} className='px-3 py-1 rounded-md border-none bg-red-500 hover:bg-red-800 font-mono text-sm mt-3 text-white'>Remove</button>
                </div>
              </div>
            </div>
          ))}
          <div className='w-2/3 bg-white mt-3 rounded-md shadow p-4 mx-auto flex items-center justify-between gap-7'>
            <h2 className='ml-32 text-xl font-mono font-bold'>Total Price: ${totalPrice.toFixed(2)}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
