import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type InitialState = {
    selectedBreed: string
    selectedLimit: string
}

const initialState: InitialState = {
    selectedBreed: "",
    selectedLimit: "",
}

export const breedFilterSlice = createSlice({
    name: "breedFilter",
    initialState,
    reducers: {
        setSelectedBreed: (state, { payload }: PayloadAction<string>) => {
            return {
                ...state,
                selectedBreed: payload
            }
        },
        setSelectedLimit: (state, { payload }: PayloadAction<string>) => {
            return {
                ...state,
                selectedLimit: payload
            }
        },
        resetBreed: () => {
            return initialState
        }
    }
})

export const { setSelectedBreed, setSelectedLimit, resetBreed } = breedFilterSlice.actions;
export default breedFilterSlice.reducer