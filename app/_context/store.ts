import { configureStore } from '@reduxjs/toolkit'
import burgerMenuReducer from "@context/features/burgermenuSlice"
import searchReducer from "@context/features/searchSlice"
import modalReducer from "@context/features/modalSlice"

export const store = configureStore({
    reducer: {
        burgerMenuReducer,
        searchReducer,
        modalReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch