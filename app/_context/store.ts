import { configureStore } from '@reduxjs/toolkit'
import burgerMenuReducer from "@context/features/burgermenuSlice"
import modalReducer from "@app/_context/features/uploadModalSlice"
import breedFilterReducer from "@context/features/breedFilterSlice"
import galleryFilterReducer from "@context/features/galleryFilterSlice"
import logsReducer from '@context/features/logsSlice'

export const store = configureStore({
    reducer: {
        burgerMenuReducer,
        modalReducer,
        galleryFilterReducer,
        breedFilterReducer,
        logsReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch