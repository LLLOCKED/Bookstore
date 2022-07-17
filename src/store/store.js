import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './slices/filterSlice';
import booksReducer from "./slices/booksSlice";
import cartReducer from "./slices/cartSlice";


export const store = configureStore({
    reducer: {
        filter: filterReducer,
        books: booksReducer,
        cart: cartReducer,
    },
})
