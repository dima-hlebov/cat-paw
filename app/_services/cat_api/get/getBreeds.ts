import { getData } from "@app/_lib/utils"
import { OrderType } from "@app/_types/cat_api"
import { Breed } from "@app/_types/cat_api/Breed.types"

type GetBreedsArgs = {
    limit: 5 | 10 | 15 | 20
    order?: OrderType
}

export async function getBreeds({ order = OrderType.ASC, limit = 5 }: GetBreedsArgs): Promise<Breed[]> {
    const searchParams = new URLSearchParams({ limit: limit.toString() })
    if (order) {
        searchParams.append("order", order)
    }

    try {
        const breeds: Breed[] = await getData<Breed[]>({ path: `/breeds?`, revalidate: 36000, searchParams })
        return breeds
    } catch (error: any) {
        console.error("Error fetching breeds:", error);
        throw error
    }
}