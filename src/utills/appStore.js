import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice"
import authenticationSlice from "./authenticationSlice";



const appStore = configureStore({
    reducer : {
        cart : cartSlice,
        authentication : authenticationSlice,
    },
});

export default appStore;