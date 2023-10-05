
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { setLogs, addLog } from "@app/_context/features/logsSlice";
import { Log } from "@app/_types/Log.type";
import { useEffect } from "react";

export function useLogs(): [Log[], (log: Log) => void] {
    const { logs } = useAppSelector(state => state.logsReducer)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (!logs) {
            const loadLogsFromLocalStorage = () => {
                try {
                    const item = localStorage.getItem("logs");
                    if (item) {
                        const serializedItem: Log[] = JSON.parse(item);
                        dispatch(setLogs(serializedItem));
                    }
                } catch (error) {
                    console.error("Error retrieving data from local storage:", error);
                }
            };

            loadLogsFromLocalStorage();
        }
    }, [logs, dispatch]);

    const setLog = (log: Log) => {
        try {
            dispatch(addLog(log))
            localStorage.setItem("logs", JSON.stringify(logs));
        } catch (error) {
            console.error('Error storing data in local storage:', error);
        }
    }

    return [logs ? logs : [], setLog]
}