import { Cat, Image } from "@app/_types/cat_api";
import { getCats } from "@services/cat_api";
import { defaultLimit } from "@services/cat_api"

export type GetCatsByBreedArgs = {
    id: string
    limit?: 5 | 10 | 15 | 20
}


export async function getCatsByBreed({ id, limit = defaultLimit }: GetCatsByBreedArgs): Promise<Cat[]> {
    const catsByBreed: Cat[] = await getCats({ limit: limit, breed: id, type: Image.STATIC })
    return catsByBreed
}