import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    msg: '',
    user: '',
    token: '',
    loading: false,
    error: '',
}

export const singInuser = createAsyncThunk('signupuser', async (body) =>
{
    const res = await fetch(`https://reqres.in/api/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    return await res.json();
})

export const registerUser = createAsyncThunk('registeruser', async (body) =>
{
    const res = await fetch(`https://reqres.in/api/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    return await res.json();
})


const AuthSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addToken: (state, action) =>
        {
            state.token = localStorage.getItem('token')
        },
        addUser: (state, action) =>
        {
            state.user = localStorage.getItem('user')
        },
        logout: (state, action) =>
        {
            state.token = null ; 
            localStorage.clear() ; 
        }
    },
    extraReducers: {
        // Sign in user 
        [ singInuser.pending ]: (state, action) =>
        {
            state.loading = true;
        },
        [ singInuser.fulfilled ]: (state, { payload: { error, msg, user , token } }) =>
        {
            state.loading = false;
            if (error)
            {
                state.error = error;
            } else
            {
                state.msg = msg;
                state.token = token; 
                state.user = user ; 

                localStorage.setItem('msg', msg)
                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(user))
            }
        },
        [ singInuser.rejected ]: (state, action) =>
        {
            state.loading = true;
        },


        // Singup user 
        [ registerUser.pending ]: (state, action) =>
        {
            state.loading = true;
        },
        [ registerUser.fulfilled ]: (state, { payload: { error, msg } }) =>
        {
            state.loading = false;
            if (error)
            {
                state.error = error;
            } else
            {
                state.msg = msg;
            }
        },
        [ registerUser.rejected ]: (state, action) =>
        {
            state.loading = true;
        },


    }
})
export const {addToken, addUser, logout} = AuthSlice.actions ; 

export default AuthSlice.reducer
