import { createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const initialState ={
  products : []
}

export const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
       getProducts : (state,action)=>{
        state.products = action.payload
       }
    }
})

export default productSlice.reducer
export const {getProducts} = productSlice.actions