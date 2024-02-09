import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState: {
        items: []
    },
    reducers: {
        // mutating the state here
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop(); // removing from back
        },
        clearCart: (state, action) => {
            // we can use both the below statement clear the cart
            // state.items.length = 0; // to clear the state.
            return {items : []} // either return the empty array
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
