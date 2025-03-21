import {combineReducers, configureStore} from "@reduxjs/toolkit";
import CartSlice from "../reducers/CartSlice";

const rootReducer = combineReducers({
    cart: CartSlice,

})

export const store = configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware({
    //         serializableCheck: false,
    //     }),
})

// export type AppDispatch = typeof store.dispatch;

