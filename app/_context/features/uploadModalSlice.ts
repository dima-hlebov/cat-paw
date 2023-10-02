import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type InitialState = {
    isUploadModalOpen: boolean
    files: File[]
}

const initialState: InitialState = {
    isUploadModalOpen: false,
    files: [],
}

export const uploadModalSlice = createSlice({
    name: "uploadModal",
    initialState,
    reducers: {
        toggleUploadModal: (state) => {
            return {
                ...state,
                isUploadModalOpen: !state.isUploadModalOpen,
                files: []
            }
        },
        setUploadFiles: (state, { payload }: PayloadAction<File[]>) => {
            return {
                ...state,
                files: payload
            }
        },
        clearUploadedFiles: (state) => {
            return {
                ...state,
                files: []
            }
        },
    }
})

export const { toggleUploadModal, setUploadFiles, clearUploadedFiles } = uploadModalSlice.actions;
export default uploadModalSlice.reducer