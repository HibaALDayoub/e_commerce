import { configureStore } from "@reduxjs/toolkit";
import items  from './ecommerceSlice.js'


export default configureStore({
    reducer:{
        items
    },
});
