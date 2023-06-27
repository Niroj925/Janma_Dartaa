'use client'

import { createSlice } from "@reduxjs/toolkit"

const initialState={
  users:null,
}

export const activeSlice=createSlice({
    name:'register',
    initialState,
    reducers:{
        setActive:(state,action)=>{
          state.users=action.payload;
        }
    }
});

export const {setActive}=activeSlice.actions;

export default activeSlice.reducer;