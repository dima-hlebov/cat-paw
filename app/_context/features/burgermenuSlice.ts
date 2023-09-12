import { createSlice } from "@reduxjs/toolkit"

type InitialState = {
    isMenuOpen: boolean
}

const initialState: InitialState = {
    isMenuOpen: false
}

export const burgerMenuSlice = createSlice({
    name: "burgermenu",
    initialState,
    reducers: {
        toggle: (state) => {
            return {
                isMenuOpen: !state.isMenuOpen
            }
        }
    }
})

export const { toggle } = burgerMenuSlice.actions;
export default burgerMenuSlice.reducer