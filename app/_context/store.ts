import { configureStore } from '@reduxjs/toolkit'
import burgerMenuReducer from "@context/features/burgermenuSlice"
import searchReducer from "@context/features/searchSlice"

export const store = configureStore({
    reducer: {
        burgerMenuReducer,
        searchReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch