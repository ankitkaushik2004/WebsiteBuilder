import { configureStore } from '@reduxjs/toolkit'
import userSlice from "./userSlice"

export const store = configureStore({
    reducer :{ // is reducer ka andar hi ham sare slices rakhta h 
        user:userSlice
















    } 
})