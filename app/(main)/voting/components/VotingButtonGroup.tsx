"use client"

import Button, { ButtonGroup } from '@components/buttons'
import IconWrapper, { DislikeIcon, FavFullIcon, FavIcon, LikeIcon } from '@components/icons'

import { AddFavourite, Cat, Favourite, ResponseFavorite, Vote } from '@app/_types/cat_api'
import { useRouter } from 'next/navigation'
import { useState, useTransition } from 'react'

export default function VotingButtonGroup({ cat }: { cat: Cat }) {
    const router = useRouter()

    const [isPending, startTransition] = useTransition()
    const [currentlyPending, setCurrentlyPending] = useState<1 | -1 | 0 | null>(null)
    const [fav, setFav] = useState<Favourite | null>(cat.favourite)

    const handleVoting = async (e: React.MouseEvent<HTMLButtonElement>, vote: 1 | -1) => {
        setCurrentlyPending(vote)
        const body: Vote = { image_id: cat.id, value: vote, sub_id: "" }
        startTransition(async () => {
            const voteRes = await fetch('/api/vote', {
                method: "POST",
                body: JSON.stringify(body)
            })
            if (voteRes) {
                const voteJson: ResponseFavorite = await voteRes.json()
                router.refresh()
            }
        })
    }

    const handleFavouriting = (e: React.MouseEvent<HTMLButtonElement>) => {
        setCurrentlyPending(0)
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
        <form onSubmit={(e) => e.preventDefault()}>
            <ButtonGroup >
                <Button onClick={(e) => handleVoting(e, 1)}
                    variant={"btnGroupFirst"}
                    size={"groupSize"}
                    state={isPending ? "isDisabled" : "isHoverable"}
                >
                    <IconWrapper
                        Icon={LikeIcon}
                        size="btnGroup"
                        className={isPending && currentlyPending === 1 ? "animate-spin" : ""} />
                </Button>
                <Button
                    onClick={handleFavouriting}
                    variant={"btnGroupMiddle"}
                    size={"groupSize"}
                    state={isPending ? "isDisabled" : "isHoverable"}
                >
                    {isPending && currentlyPending === 0
                        ? <IconWrapper Icon={fav ? FavIcon : FavFullIcon} size={"btnGroup"} />
                        : <IconWrapper Icon={fav ? FavFullIcon : FavIcon} size={"btnGroup"} />
                    }
                </Button>
                <Button onClick={(e) => handleVoting(e, -1)}
                    variant={"btnGroupLast"}
                    size={"groupSize"}
                    state={isPending ? "isDisabled" : "isHoverable"}
                >
                    <IconWrapper
                        Icon={DislikeIcon}
                        size="btnGroup"
                        className={isPending && currentlyPending === -1 ? "animate-spin" : ""} />
                </Button>
            </ButtonGroup>
        </form>
    )
}
