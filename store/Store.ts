import {combineReducers, configureStore} from "@reduxjs/toolkit";
import CartSlice from "../reducers/CartSlice";

const rootReducer = combineReducers({
    cart: CartSlice,

})

export const store = configureStore({
    reducer: rootReducer
})

// export type AppDispatch = typeof store.dispatch;

