import { getData } from "@app/_lib/utils"
import { Breed } from "@app/_types/cat_api"
import { breedIdPattern, defaultBreed } from "@services/cat_api"

export type GetBreedArgs = {
    id: string
}

export async function getBreed({ id }: GetBreedArgs): Promise<Breed> {
    try {
        if (id !== defaultBreed && breedIdPattern.test(id)) {
            const breed: Breed = await getData<Breed>({ path: `/breeds/${id}`, revalidate: 60 * 60 * 24 * 7 })
            return breed
        }
        throw Error("Wrong id")
    } catch (error: any) {
        console.error("Error fetching breed:", error);
        throw error
    }
}