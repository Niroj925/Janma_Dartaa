'use client'

import { createSlice } from "@reduxjs/toolkit"

const initialState={
  active:1,
}

export const activeSlice=createSlice({
    name:'index',
    initialState,
    reducers:{
        setActive:(state,action)=>{
          state.active=action.payload;
        }
    }
});

export const {setActive}=activeSlice.actions;

export default activeSlice.reducer;