import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
    query: string
}

const initialState: InitialState = {
    query: ""
}

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setQuery: (state, { payload }: PayloadAction<string>) => {
            return {
                ...state,
                query: payload
            }
        }
    }
});

export const { setQuery } = searchSlice.actions
export default searchSlice.reducer