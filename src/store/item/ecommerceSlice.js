import {createSlice , createAsyncThunk } from "@reduxjs/toolkit";



export const getInformation = createAsyncThunk('ecommerce/getInformation' , async (_, thunkAPI) => {
    try{
        const res = await fetch('http://localhost:8080/Shop/home/');
        const data = await res.json();
        console.log(res)
        return data;
    }catch(error){
        console.log(error)
    }
})

const ecommerceSlice = createSlice({
    name: 'ecommerce',
    initialState:{items:[] , gategories:[]},
    reducers:{},
    extraReducers:{
        [getInformation.pending]:(state, action) =>{
        },
        [getInformation.fulfilled]:(state, action) =>{
            // state.information = action.payload;
            state.items = action.payload.item.data;
            console.log(state.items)
            state.gategories = action.payload.categories.data;
            console.log(state.gategories)
            // console.log(`"ddddddddddd"  ${state.items}`)

        },
        [getInformation.rejected]:(state, action) =>{
        }
    
    }
});

export default ecommerceSlice.reducer




