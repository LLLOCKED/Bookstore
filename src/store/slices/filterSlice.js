import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    genre: 0,
    currentPage: 1,
    selected: {
        name: "порядку", sortProp: "id"
    }
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeGenre: (state, action) => {
            state.genre = action.payload
        },
        changeSort: (state, action) => {
            state.selected = action.payload
        },
        changeCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },
        setFilters: (state,action) =>{
            state.genre = Number(action.payload.genre);
            state.currentPage = Number(action.payload.currentPage);
            state.selected = action.payload.sort;
        }
    },
})

export const { changeGenre, changeSort, changeCurrentPage, setFilters } = filterSlice.actions

export default filterSlice.reducer