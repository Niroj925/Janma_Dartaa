'use client'

import { createSlice } from "@reduxjs/toolkit"

const initialState={
  account:'',
  contract:{},
  provider:null,
  signer:null,
  
}

export const userSlice=createSlice({
    name:'state',
    initialState,
    reducers:{
        setAccount:(state,action)=>{
      state.account=action.payload;
        },
        setProvider:(state,action)=>{
          state.provider=action.payload;
        },
        setSigner:(state,action)=>{
            state.signer=action.payload;
        },
        setContract:(state,action)=>{
            state.contract=action.payload;
        }
    }
});

export const {setAccount,setProvider,setSigner, setContract}=userSlice.actions;

export default userSlice.reducer;