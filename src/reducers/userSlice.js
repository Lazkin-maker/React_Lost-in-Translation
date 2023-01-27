import { createAsyncThunk,createSlice} from '@reduxjs/toolkit';
//import { json } from 'react-router-dom';
import {API_BASE_URL} from "../constants";



export const fetchUsers = createAsyncThunk(
    "user/FetchUsers",
    async () =>{
        const response = await fetch(API_BASE_URL);
        //await simulateDelay()
         if(!response.ok){
            return Promise.reject()
         }
        const users = await response.json();
        return {users}
    }
)


export const addTranslation = createAsyncThunk(
    "user/addTranslation",
    async(transDetails, userId)=>{
        const response = await fetch(`${API_BASE_URL}/${userId}`, {
            method: 'PATCH', // NB: Set method to PATCH
            headers: {
              'X-API-Key': ` ${process.env.REACT_APP_API_KEY}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                // Provide new translations to add to user with id 1
                translations: ['easy', 'i love javascript'] 
            })
        })
        if(!response.ok){
            console.log(`Request rejected. Status: ${response.status}`);
            return Promise.reject()
        }   
        const users = await response.json();
        return {users}
    }
)

export const addUser = createAsyncThunk(
    "user/addUser",
    async(userDetails) =>{
        //console.log("Api key", process.env.REACT_APP_API_KEY, API_BASE_URL)
       
        // console.log(REACT_APP_API_KEY)
        const response = await fetch(API_BASE_URL, {
            method: "POST",
            headers: {
                'X-API-Key': ` ${process.env.REACT_APP_API_KEY}`,
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({username: userDetails.string , translations : []}) // here we add element/object to the body
        })
      
            if(!response.ok){
                console.log(`Request rejected. Status: ${response.status}`);
                return Promise.reject()
             }
    
        const users = await response.json();
        return {users}
    }
)

const simulateDelay =async() =>{
    return new Promise(x => setTimeout((x), 2000 ))
}

export const userSlice = createSlice({
    name: "user",
    initialState:{
        users:[],
        loadingUsers : false,
        error: null,   
         
    },
    reducers:{

    },
    extraReducers: {
        [fetchUsers.pending] : (state, action) =>{
            state.loadingUsers = true
        },

        [fetchUsers.fulfilled] : (state, action) =>{
            state.users = action.payload.users
            state.loadingUsers = false
        },

        [fetchUsers.rejected] : (state, action)=>{
            state.error = action.error
            state.loadingUsers = false
        },

        [addUser.fulfilled] : (state, action) =>{        
            state.users.push(action.payload.user)
        },

        [addTranslation.fulfilled] : (state, action)=>{        
            state.user.translation.push(action.payload.translation)
        }
      
    }
})

export const {} = userSlice.actions
export default userSlice.reducer