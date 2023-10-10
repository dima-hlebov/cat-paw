"use client"

import Button from "@components/buttons"
import IconWrapper from "@components/icons/IconWrapper"
import { AddFavourite, Favourite, ResponseFavorite } from "@app/_types/cat_api"
import { FavFullIcon, FavIcon } from "@app/_components/icons"
import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import { useLogs } from "@hooks/localstorageHooks"
import { Log, LogAction } from "@app/_types/Log.type"
import { formatTime } from "@app/_lib/utils"
import { addFavouriteAction, deleteFavouriteAction } from "@app/_actions"

export default function FavouriteButton({ favourite }: { favourite: Favourite }) {
    const router = useRouter()

    const [isPending, startTransition] = useTransition()
    const [fav, setFav] = useState<Favourite | null>(favourite)
    const [logs, setLog] = useLogs()

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        startTransition(async () => {
            if (fav) {
                const favouriteRes = await fetch(`/api/favourites/${fav.id}`, {
                    method: "DELETE",
                })
                if (favouriteRes.ok) {
                    setFav(null)
                    const newLog: Log = { message: favourite.image?.id as string, timestamp: formatTime(new Date()), action: LogAction.UNFAVOURITE }
                    setLog(newLog)
                }
                // const { data } = await deleteFavouriteAction(fav.id.toString(), "/gallery")
                // if (data) {
                //     setFav(null)
                //     const newLog: Log = { message: favourite.image?.id as string, timestamp: formatTime(new Date()), action: LogAction.UNFAVOURITE }
                //     setLog(newLog)
                // }
            }
            if (!fav) {
                const body: AddFavourite = { image_id: favourite.image?.id as string, sub_id: "" }
                const favouriteRes = await fetch('/api/favourites', {
                    method: "POST",
                    body: JSON.stringify(body)
                })
                if (favouriteRes.ok) {
                    const favouriteJson: ResponseFavorite = await favouriteRes.json()
                    setFav({ id: favouriteJson.id })
                    const newLog: Log = { message: favourite.image?.id as string, timestamp: formatTime(new Date()), action: LogAction.FAVOURITE }
                    setLog(newLog)
                }
                // const { data } = await addFavouriteAction(favourite.image?.id as string, "/gallery")
                // if (data) {
                //     setFav({ id: data.id })
                //     const newLog: Log = { message: favourite.image?.id as string, timestamp: formatTime(new Date()), action: LogAction.FAVOURITE }
                //     setLog(newLog)
                // }
            }
            router.refresh()
        })
    }

    return (
        <Button onClick={handleClick} state={isPending ? "isDisabled" : "isHoverable"} variant={"monochrome"} size={"sm"} className="dark:bg-zinc-800">
            <IconWrapper Icon={fav ? FavFullIcon : FavIcon} size="md" className={isPending ? "animate-ping" : ""} />
        </Button>
    )
}