import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    allPrice: 0,
    items: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const filter = state.items.find((obj) => obj.id === action.payload.id);
            if (filter) {
                filter.count++;
            } else {
                state.items.push({...action.payload, count: 1});
            }
            state.allPrice = state.items.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum
            }, 0)
        },
        removeItem: (state, action) => {
            state.items = state.items.filter((obj) => obj.id !== action.payload.id);
            state.allPrice = state.allPrice - (action.payload.price * action.payload.count);
        },

        removeOneItem: (state, action) => {
            const filter = state.items.find((obj) => obj.id === action.payload.id);
            if(filter.count > 1){
                filter.count--;
                state.allPrice = state.allPrice - filter.price ;
            }
        },

        clearCart: (state, action) => {
            state.items = [];
            state.allPrice = 0;
        },

    },
})

export const {addItem, removeItem, removeOneItem, clearCart} = cartSlice.actions

export default cartSlice.reducer