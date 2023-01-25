import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userSlice"
// import counterReducer from "../reducers/counterSlice";

export default configureStore ({
    reducer: {
        // counter: counterReducer,
        user : userReducer

    }
})
