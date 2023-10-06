import { getData } from "@lib/utils"
import { Breed, Order, Limit, isValueInLimit, isValueInOrder } from "@app/_types/cat_api"
import { defaultLimit, defaultOrder } from "@services/cat_api"

export type GetBreedsArgs = {
    limit?: Limit
    order?: Order
    page?: number
}

export async function getBreeds({ order, limit, page }: GetBreedsArgs): Promise<Breed[]> {
    // Validate input and Initialize URLSearchParams
    const searchParams = new URLSearchParams()
    if (order) {
        if (!isValueInOrder(order)) order = Order.ASC
        searchParams.append("order", order)
    }
    if (limit) {
        if (!isValueInLimit(limit)) limit = defaultLimit
        searchParams.append("limit", limit.toString())
    }
    if (limit && page !== undefined && page >= 0) {
        searchParams.append("page", page.toString())
    }

    const breeds: Breed[] = await getData<Breed[]>({ path: `/breeds?`, revalidate: 60 * 60 * 24 * 7, searchParams })
    return breeds
}