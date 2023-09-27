import { getData } from "@lib/utils"
import { Breed, Order, Limit } from "@app/_types/cat_api"
import { defaultOrder } from "@services/cat_api"

export type GetBreedsArgs = {
    limit?: Limit
    order?: Order
}

export async function getBreeds({ order = defaultOrder, limit }: GetBreedsArgs): Promise<Breed[]> {
    const searchParams = new URLSearchParams({ order: order })
    if (limit) {
        if (limit > 20) limit = 20
        searchParams.append("limit", limit.toString())
    }

    try {
        const breeds: Breed[] = await getData<Breed[]>({ path: `/breeds?`, revalidate: 60 * 60 * 24 * 7, searchParams })
        return breeds
    } catch (error: any) {
        console.error("Error fetching breeds:", error);
        throw error
    }
}