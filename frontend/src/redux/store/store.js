import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cartSlice";
import productReducer from "../slices/productSlice";
import authSlice from "../slices/authSlice";
import orderSlice from "../slices/orderSlice";
import formSlice from "../slices/formSlice";
 
const store = configureStore({
    reducer : {
        auth : authSlice,
        cart : cartReducer,
        product : productReducer,
        order : orderSlice,
        form:formSlice
    }
})

export default store;