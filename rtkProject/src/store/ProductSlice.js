import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// We make something like enum to show status while performing async tasks
export const STATUSES = Object.freeze({
    IDLE: "idle",
    ERROR: "error",
    LOADING: "loading",
});

const initialState = {
    data: [],
    status: STATUSES.IDLE,
    totalPrice: 0, // Initialize totalPrice
};

const ProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        // setProducts(state, action) {
        //     state.data = action.payload;
        // },
        // setStatus(state, action) {
        //     state.status = action.payload;
        // },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
                // Compute total price using reduce method
                state.totalPrice = action.payload.reduce((total, product) => total + product.price, 0);
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.status = STATUSES.ERROR;
            });
    },
});

export const { setProducts, setStatus } = ProductSlice.actions;
export default ProductSlice.reducer;

// The word "thunk" is a programming term that means "a piece of code that does some delayed work".
// Rather than execute some logic now, we can write a function body or code that can be used to perform the work later.

// Thunks

// export function fetchProducts() {
//     return async function fetchProductThunk(dispatch, getState) {
//         dispatch(setStatus(STATUSES.LOADING));
//         try {
//             const res = await fetch("https://fakestoreapi.com/products");
//             const data = await res.json();
//             dispatch(setProducts(data));
//             dispatch(setStatus(STATUSES.IDLE));
//         } catch (error) {
//             console.log(err);
//             dispatch(setStatus(STATUSES.ERROR));
//         }
//     }
// }

// asyncThunk
export const fetchProducts = createAsyncThunk("products/fetch", async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data;
});
