import { createSlice } from "@reduxjs/toolkit";


export const CartSlice= createSlice({
    // teeno values hamesa deni pdegi
    name:"cart",
    initialState:[],
    reducers:{
        add:(state,action)=>{
            // action.payload input me jo bhi aayega use show krta haii
            state.push(action.payload)
        },
        remove:(state ,action)=>{
            return state.filter((item)=>item.id !== action.payload);
        }
    }
});

// yeh hamesa krna pdega as a syntax
export const{add,remove}=CartSlice.actions;
export default CartSlice.reducer;