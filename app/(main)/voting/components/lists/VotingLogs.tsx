"use client"

import { Logs } from "@app/_components/lists"
import { useLogs } from "@app/_hooks/localstorageHooks"

export default function VotingLogs() {
    const [logs] = useLogs()

    return <Logs logs={logs} />
}
