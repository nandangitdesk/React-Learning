import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/UserSlice"
import productReducer from "../features/productSlice";

export const store = configureStore({
    reducer: {
        userReducer  : userReducer,
        productReducer : productReducer
    }
});

