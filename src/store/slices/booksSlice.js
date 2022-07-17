import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

// First, create the thunk
export const fetchBooks = createAsyncThunk(
    'books/fetchBooksStatus',
    async (params) => {
        const {categories, sort, searchValue, pagination} = params;
        const {data} = await axios.get(`https://62c15c6f2af60be89ec576b0.mockapi.io/books?${categories}&sortBy=${sort}&order=desc&title=${searchValue}&${pagination}`)
        return data
    }
)

const initialState = {
    books: [],
    status: 'loading',
}

export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBooks: (state, action) => {
            state.books = action.payload
        },
    },
    extraReducers:{
        [fetchBooks.pending]: (state) => {
            state.status = 'loading';
            state.books = [];
        },
        [fetchBooks.fulfilled]: (state, action) => {
            state.books = action.payload
            state.status = "success";
        },
        [fetchBooks.rejected]: (state, action) => {
            state.status = 'error';
            state.books = [];
        }
    }
})

export const { addBooks } = booksSlice.actions

export default booksSlice.reducer