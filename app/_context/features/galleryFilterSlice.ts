import { BreedName, Image, Limit, Order } from "@app/_types/cat_api"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type InitialState = {
    breed: string
    limit: string
    order: string
    type: string
}

const initialState: InitialState = {
    breed: "",
    limit: "",
    order: "",
    type: ""
}

export const galleryFilterSlice = createSlice({
    name: "galleryFilter",
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
        setOrder: (state, { payload }: PayloadAction<string>) => {
            return {
                ...state,
                order: payload
            }
        },
        setType: (state, { payload }: PayloadAction<string>) => {
            return {
                ...state,
                type: payload
            }
        },
        resetGallery: () => {
            return initialState
        }
    }
})

export const { setBreed, setOrder, setLimit, setType, resetGallery } = galleryFilterSlice.actions;
export default galleryFilterSlice.reducer