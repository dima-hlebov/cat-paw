import { UploadedImage } from "@app/_types/cat_api"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type InitialState = {
    isUploadModalOpen: boolean
    files: UploadedImage[]
    isUploaded: boolean | null
}

const initialState: InitialState = {
    isUploadModalOpen: false,
    files: [],
    isUploaded: null
}

export const uploadModalSlice = createSlice({
    name: "uploadModal",
    initialState,
    reducers: {
        toggleUploadModal: (state) => {
            return {
                ...state,
                isUploadModalOpen: !state.isUploadModalOpen,
            }
        },
        setUploadedFiles: (state, { payload }: PayloadAction<UploadedImage[]>) => {
            return {
                ...state,
                files: payload
            }
        },
        setIsUploaded: (state, { payload }: PayloadAction<boolean | null>) => {
            return {
                ...state,
                isUploaded: payload
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

export const { toggleUploadModal, setUploadedFiles, clearUploadedFiles, setIsUploaded } = uploadModalSlice.actions;
export default uploadModalSlice.reducer