import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type InitialState = {
    isModalOpen: boolean
    files: File[]
}

const initialState: InitialState = {
    isModalOpen: false,
    files: [],
}

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        toggleModal: (state) => {
            return {
                ...state,
                isModalOpen: !state.isModalOpen,
                files: []
            }
        },
        setFiles: (state, { payload }: PayloadAction<File[]>) => {
            return {
                ...state,
                files: payload
            }
        },
        clearFiles: (state) => {
            return {
                ...state,
                files: []
            }
        },
    }
})

export const { toggleModal, setFiles, clearFiles } = modalSlice.actions;
export default modalSlice.reducer