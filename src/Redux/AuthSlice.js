import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { json } from "react-router-dom";


const initialState = {
     msg: '',
     user: '',
     token : '',
     loading : false,
     error : '', 
}

export  const singUpuser = createAsyncThunk('signupuser', async(body) => {
    const res = await fetch(``,{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(body)
    }); 
    return await  res.json();  
})
export  const registerUser = createAsyncThunk('registeruser', async(body) => {
    const res = await fetch(``,{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(body)
    }); 
    return await  res.json();  
})


const AuthSlice = createSlice({
    name: 'user',
    initialState, 
    reducers: {

    },
    extraReducers: {
    [singUpuser.pending] : (state , action) => {
        state.loading = true ; 
    },
    [singUpuser.fulfilled] : (state , {payload : {error, msg}}) => {
        state.loading = false ;
        if(error){
            state.error = error ;
        } else{
            state.msg = msg ; 
        }
    },
    [singUpuser.rejected] : (state , action) =>{
        state.loading = true ; 
    },


    }
})

export default AuthSlice.reducer
