import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
//import { json } from 'react-router-dom';
import { API_BASE_URL } from "../constants";



export const fetchUsers = createAsyncThunk(
    "user/FetchUsers",
    async () => {
        const response = await fetch(API_BASE_URL);
        //await simulateDelay()
        if (!response.ok) {
            return Promise.reject()
        }
        const users = await response.json();
        return { users }
    }
)


// export const addTranslation = createAsyncThunk(
//     "user/addTranslation",
//     async(transDetails, userId)=>{
//         const response = await fetch(`${API_BASE_URL}/${userId}`, {
//        // const response = await fetch(API_BASE_URL+"/"+userId, {

//             method: 'PATCH', // NB: Set method to PATCH
//             headers: {
//               'X-API-Key': ` ${process.env.REACT_APP_API_KEY}`,
//               'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 // Provide new translations to add to user with id 1
//                 translations: ['','i love javascript'] 
//             })
//         })
//         if(!response.ok){
//             console.log(`Request rejected. Status: ${response.status}`);
//             return Promise.reject()
//         }   
//         const users = await response.json();
//         return {user : users}
//     }
// )


export const addTranslation = createAsyncThunk(
    "user/addTranslation",
    async (transDetails, { getState, dispatch }) => {
        console.log("Iddddd", transDetails.currentId)
        console.log("string", transDetails.string)

        const transState = getState().user;
        const currentUser = transState.loggedInUser;

        const response = await fetch(API_BASE_URL + "/" + currentUser.id, {
            method: 'PATCH', // NB: Set method to PATCH
            headers: {
                'X-API-Key': ` ${process.env.REACT_APP_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                translations: [...currentUser.translations, transDetails.string]
                //  translations: [transDetails.string]

            })
        })
        if (!response.ok) {
            console.log(`Request rejected. Status: ${response.status}`);
            throw new Error("Something went wrong while adding");
            // return Promise.reject()
        }

        const updateUserTranslation = await response.json();

        return updateUserTranslation;
    }
)

export const addUser = createAsyncThunk(
    "user/addUser",
    async (userDetails) => {
        const usersResponse = await fetch(API_BASE_URL + "?username=" + userDetails.username);
        const foundUsers = await usersResponse.json();
        if (foundUsers.length > 0) {
            return { user: foundUsers[0] }
        } else {
            const response = await fetch(API_BASE_URL, {
                method: "POST",
                headers: {
                    'X-API-Key': ` ${process.env.REACT_APP_API_KEY}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username: userDetails.username, translations: [] }) // here we add element/object to the body
            })

            if (!response.ok) {
                console.log(`Request rejected. Status: ${response.status}`);
                return Promise.reject()
            }

            const users = await response.json();
            return { user: users }
        }
    }
)

const simulateDelay = async () => {
    return new Promise(x => setTimeout((x), 2000))
}

export const userSlice = createSlice({
    name: "user",
    initialState: {
        users: [],
        loadingUsers: false,
        error: null,
        loggedInUser: {}
    },
    reducers: {
        logOut: (state) => {
            state.loggedInUser = null;
        }

    },
    extraReducers: {
        [fetchUsers.pending]: (state, action) => {
            state.loadingUsers = true
        },

        [fetchUsers.fulfilled]: (state, action) => {
            state.users = action.payload.users
            state.loadingUsers = false
        },

        [fetchUsers.rejected]: (state, action) => {
            state.error = action.error
            state.loadingUsers = false
        },

        [addUser.pending]: (state, action) => {
            state.loadingUsers = true
        },

        [addUser.fulfilled]: (state, action) => {
            // state.users.push(action.payload.user)
            state.loggedInUser = action.payload.user
        },

        [addTranslation.pending]: (state, action) => {
            state.loading = true
        },

        [addTranslation.fulfilled]: (state, action) => {
            // state.loggedInUser.translations = [...action.payload]
            state.loading = false
            state.loggedInUser.translations = action.payload.translations
            // state.user.translation.push(...action.payload.translations)
        },

        [addTranslation.rejected]: (state, action) => {
            // handle the error here, for example by showing a notification or logging the error
            state.loading = false
            state.error = "An error has occuerd"
        }
    }
})

export const { logOut } = userSlice.actions
export default userSlice.reducer