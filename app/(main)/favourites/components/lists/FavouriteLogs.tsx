"use client"

import { Logs } from "@app/_components/lists"
import { useLogs } from "@app/_hooks/localstorageHooks"
import { LogAction } from "@app/_types/Log.type"

export default function FavouriteLogs() {
    const [logs] = useLogs()
    const unfavourites = logs.filter(log => log.action === LogAction.UNFAVOURITE || log.action === LogAction.FAVOURITE)

    return <Logs logs={unfavourites} />
}
