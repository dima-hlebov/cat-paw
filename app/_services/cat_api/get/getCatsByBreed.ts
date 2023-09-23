import { Cat, ImageType } from "@app/_types/cat_api";
import { getCats } from "./getCats";

type GetCatsByBreedArgs = {
    id: string
    limit?: 5 | 10 | 15 | 20
}


export async function getCatsByBreed({ id, limit = 5 }: GetCatsByBreedArgs): Promise<Cat[]> {
    const catsByBreed: Cat[] = await getCats({ limit: limit, breed: id, type: ImageType.STATIC })

    return catsByBreed
}