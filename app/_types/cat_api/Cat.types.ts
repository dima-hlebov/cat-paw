import { Breed } from "./Breed.types"

export type Cat = {
    id: string
    width: number
    height: number
    url: string
    breeds: Breed[]
}

export function isCats(obj: any[]): obj is Cat[] {
    return obj[0].breeds !== undefined
}