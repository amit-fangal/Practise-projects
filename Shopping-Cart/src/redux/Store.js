import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slices/CartSlice";

// yeh global store haii jo ki sbhi slices ke data ka store krta haii 
export const store = configureStore({
        reducer:{
            cart: CartSlice.reducer
        },
});