import { getData } from "@app/_lib/utils"
import { Breed } from "@app/_types/cat_api"

type GetBreedArgs = {
    id: string
}

export async function getBreed({ id }: GetBreedArgs): Promise<Breed> {
    try {
        const breed: Breed = await getData<Breed>({ path: `/breeds/${id}` })
        return breed
    } catch (error: any) {
        console.error("Error fetching breed:", error);
        throw error
    }
}