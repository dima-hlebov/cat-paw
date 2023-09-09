import { configureStore } from '@reduxjs/toolkit'
import burgerMenuReducer from "@context/features"

export const store = configureStore({
    reducer: {
        burgerMenuReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch