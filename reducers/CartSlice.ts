import {ProductModel} from "../models/productModel";
import {createSlice} from "@reduxjs/toolkit";

const initialState : ProductModel[]=[]

const CartSlice = createSlice({
    name:"cart",
    initialState:initialState,
    reducers:{
        /*addCart:(state,action)=>{
            state.push(action.payload);
        },*/
        addCart: (state, action) => {
            return [...state, action.payload]; // ✅ Creates a new array
        },
        removeCart: (state, action) => {
            return state.filter(product => product.title !== action.payload);
        }

    }
})

export const {addCart,removeCart}= CartSlice.actions;
export default CartSlice.reducer;