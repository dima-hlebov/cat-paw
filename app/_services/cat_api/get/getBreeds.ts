import { getData } from "@lib/utils"
import { Breed } from "@app/_types/cat_api"
import { LimitType, OrderType } from "@app/_types/cat_api/Params.types"


type GetBreedsArgs = {
    limit: LimitType
    order?: OrderType
}

export async function getBreeds({ order = OrderType.ASC, limit = 5 }: GetBreedsArgs): Promise<Breed[]> {
    const searchParams = new URLSearchParams({ limit: limit.toString() })
    if (order) {
        searchParams.append("order", order)
    }

    try {
        const breeds: Breed[] = await getData<Breed[]>({ path: `/breeds?`, revalidate: 60 * 60 * 24 * 7, searchParams })
        return breeds
    } catch (error: any) {
        console.error("Error fetching breeds:", error);
        throw error
    }
}