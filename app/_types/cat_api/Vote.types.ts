import { AddFavourite, ResponseFavorite } from "."

export type Vote = {
    value: 1 | -1
} & AddFavourite

export type ResponseVote = ResponseFavorite