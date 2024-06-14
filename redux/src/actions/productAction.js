import axios from "axios"
import { getProducts } from "../features/productSlice";

export const asyncGetProducts = ()=> async(dispatch,getState)=>{
    try {
        const response = await axios.get("https://fakestoreapi.com/products")
        //here we have syncron type of data 
        //getProducts direct call nahi hoga bina dispatch ke 
        //getState apne curr state ko deta hai 
        dispatch(getProducts(response.data))
    } catch (error) {
        console.log(error);
    }
}