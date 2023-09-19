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
        toggleMenu: (state) => {
            return {
                isMenuOpen: !state.isMenuOpen
            }
        }
    }
})

export const { toggleMenu } = burgerMenuSlice.actions;
export default burgerMenuSlice.reducer