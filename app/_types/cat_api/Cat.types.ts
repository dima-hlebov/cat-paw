import { Breed } from "./Breed.types"

export type Cat = {
    id: string
    width: number
    height: number
    url: string
    breeds: Breed[]
}