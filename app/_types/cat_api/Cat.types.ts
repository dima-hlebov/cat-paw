import { Breed } from "./Breed.types"
import { Favourite } from "./Favourite.types"

export type Cat = {
    id: string
    width: number
    height: number
    url: string
    breeds: Breed[]
    favourite: Favourite
}

export function isCats(obj: any[]): obj is Cat[] {
    return obj[0].breeds !== undefined
}