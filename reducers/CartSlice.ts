import {ProductModel} from "../models/productModel";
import {createSlice} from "@reduxjs/toolkit";

const initialState : ProductModel[]=[]

const CartSlice = createSlice({
    name:"cart",
    initialState:initialState,
    reducers:{
        addCart:(state,action)=>{
            state.push(action.payload);
        },

    }
})

export const {addCart}= CartSlice.actions;
export default CartSlice.reducer;