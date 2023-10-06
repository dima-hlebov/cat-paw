export type Favourite = {
    id: number
    user_id?: string,
    image_id?: string,
    sub_id?: string,
    created_at?: string,
    image?: {
        id: string,
        url: string
    }
}
export type AddFavourite = { image_id: string, sub_id: string }
export type ResponseFavorite = { message: string, id: number }