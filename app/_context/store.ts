import { configureStore } from '@reduxjs/toolkit'
import burgerMenuReducer from "@context/features/burgermenuSlice"
import sliderSlice from "@context/features/sliderSlice"

export const store = configureStore({
    reducer: {
        burgerMenuReducer,
        sliderSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch