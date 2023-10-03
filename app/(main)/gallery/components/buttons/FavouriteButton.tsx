"use client"

import Button from "@components/buttons"
import IconWrapper from "@components/icons/IconWrapper"
import { Cat, AddFavourite, Favourite, ResponseFavorite } from "@app/_types/cat_api"
import { FavFullIcon, FavIcon } from "@app/_components/icons"
import { useState, useTransition } from "react"

export default function FavouriteButton({ cat }: { cat: Cat }) {
    const [isPending, startTransition] = useTransition()
    const [fav, setFav] = useState<Favourite | null>(cat.favourite)

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        startTransition(async () => {
            if (fav) {
                const favouriteRes = await fetch(`/api/favourites/${fav.id}`, {
                    method: "DELETE",
                })
                if (favouriteRes.ok) {
                    setFav(null)
                }
            }
            if (!fav) {
                const body: AddFavourite = { image_id: cat.id, sub_id: "" }
                const favouriteRes = await fetch('/api/favourites', {
                    method: "POST",
                    body: JSON.stringify(body)
                })
                if (favouriteRes.ok) {
                    const favourite: ResponseFavorite = await favouriteRes.json()
                    setFav({ id: favourite.id })
                }
            }
        })
    }

    return (
        <Button onClick={handleClick} variant={"monochrome"} size={"sm"} className="dark:bg-zinc-800">
            {isPending
                ? <IconWrapper Icon={fav ? FavIcon : FavFullIcon} size="md" />
                : <IconWrapper Icon={fav ? FavFullIcon : FavIcon} size="md" />
            }
        </Button>
    )
}