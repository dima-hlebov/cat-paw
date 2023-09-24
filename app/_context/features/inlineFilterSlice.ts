import { createSlice } from "@reduxjs/toolkit"

type InitialState = {
    breed: string
    limit: 
}

const initialState: InitialState = {
    isMenuOpen: false
}

export const inlineFilterSlice = createSlice({
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

export const { toggleMenu } = inlineFilterSlice.actions;
export default inlineFilterSlice.reducer