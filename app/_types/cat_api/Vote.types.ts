import { AddFavourite, ResponseFavorite } from "."

export type Vote = {
    id: number,
    image_id: string,
    sub_id: string,
    created_at: string,
    country_code: string,
    image: {
        id: string,
        url: string
    }
    value: 1 | -1
}

export type AddVote = { image_id: string; value: 1 | -1; sub_id: string; }

export type ResponseVote = ResponseFavorite