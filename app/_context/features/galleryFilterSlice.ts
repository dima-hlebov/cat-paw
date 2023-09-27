import { BreedName, Image, Limit, Order } from "@app/_types/cat_api"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type InitialState = {
    breed: BreedName
    limit: Limit
    order: Order
    type: Image
}

const initialState: InitialState = {
    breed: { id: "none", name: "None" },
    limit: 5,
    order: Order.ASC,
    type: Image.STATIC
}

export const galleryFilterSlice = createSlice({
    name: "galleryFilter",
    initialState,
    reducers: {
        setBreed: (state, { payload }: PayloadAction<BreedName>) => {
            return {
                ...state,
                breed: payload
            }
        },
        setLimit: (state, { payload }: PayloadAction<Limit>) => {
            return {
                ...state,
                limit: payload
            }
        },
        setOrder: (state, { payload }: PayloadAction<Order>) => {
            return {
                ...state,
                order: payload
            }
        },
        setType: (state, { payload }: PayloadAction<Image>) => {
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