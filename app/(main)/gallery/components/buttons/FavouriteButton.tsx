"use client"

import Button from "@components/buttons"
import IconWrapper from "@components/icons/IconWrapper"
import { Cat, AddFavourite, Favourite, ResponseFavorite } from "@app/_types/cat_api"
import { FavFullIcon, FavIcon } from "@app/_components/icons"
import { useState, useTransition } from "react"
import { Log, LogAction } from "@app/_types/Log.type"
import { formatTime } from "@app/_lib/utils"
import { useLogs } from "@app/_hooks/localstorageHooks"

export default function FavouriteButton({ cat }: { cat: Cat }) {
    const [isPending, startTransition] = useTransition()
    const [fav, setFav] = useState<Favourite | null>(cat.favourite)
    const [logs, setLog] = useLogs()

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        startTransition(async () => {
            if (fav) {
                const favouriteRes = await fetch(`/api/favourites/${fav.id}`, {
                    method: "DELETE",
                })
                if (favouriteRes.ok) {
                    setFav(null)
                    const newLog: Log = { message: cat.id as string, timestamp: formatTime(new Date()), action: LogAction.UNFAVOURITE }
                    setLog(newLog)
                }
            }
            if (!fav) {
                const body: AddFavourite = { image_id: cat.id, sub_id: "" }
                const favouriteRes = await fetch('/api/favourites', {
                    method: "POST",
                    body: JSON.stringify(body)
                })
                if (favouriteRes.ok) {
                    const favouriteJson: ResponseFavorite = await favouriteRes.json()
                    setFav({ id: favouriteJson.id })
                    const newLog: Log = { message: cat.id as string, timestamp: formatTime(new Date()), action: LogAction.FAVOURITE }
                    setLog(newLog)
                }
            }
        })
    }

    return (
        <Button onClick={handleClick} variant={"monochrome"} size={"sm"} className="dark:bg-zinc-800">
            <IconWrapper Icon={fav ? FavFullIcon : FavIcon} size="md" className={isPending ? "animate-ping" : ""} />
        </Button>
    )
}