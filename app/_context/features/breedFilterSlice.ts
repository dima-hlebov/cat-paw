import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type InitialState = {
    breed: string
    limit: string
}

const initialState: InitialState = {
    breed: "",
    limit: "",
}

export const breedFilterSlice = createSlice({
    name: "breedFilter",
    initialState,
    reducers: {
        setBreed: (state, { payload }: PayloadAction<string>) => {
            return {
                ...state,
                breed: payload
            }
        },
        setLimit: (state, { payload }: PayloadAction<string>) => {
            return {
                ...state,
                limit: payload
            }
        },
        resetBreedFilters: () => {
            return initialState
        }
    }
})

export const { setBreed, setLimit, resetBreedFilters } = breedFilterSlice.actions;
export default breedFilterSlice.reducer