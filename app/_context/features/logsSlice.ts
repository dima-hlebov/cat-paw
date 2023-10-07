import { Log } from "@app/_types/Log.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
    logs: Log[] | null
}

const initialState: InitialState = {
    logs: null
}

const logsSlice = createSlice({
    name: "logs",
    initialState,
    reducers: {
        setLogs: (state, { payload }: PayloadAction<Log[] | null>) => {
            return {
                ...state,
                logs: payload
            }
        },
        addLog: (state, { payload }: PayloadAction<Log>) => {
            const newLogs =
                state.logs
                    ? [payload, ...state.logs]
                    : [payload]
            return {
                ...state,
                logs: newLogs
            }
        },
    }
});

export const { addLog, setLogs } = logsSlice.actions
export default logsSlice.reducer