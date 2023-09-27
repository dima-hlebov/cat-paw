import { Cat, Image, Limit, Order } from "@app/_types/cat_api"
import { getData } from "@lib/utils"
import { defaultLimit } from "@services/cat_api"

export type GetCatsArgs = {
    limit: Limit
    order?: Order
    breed?: string
    type: Image
}

export async function getCats({ limit = defaultLimit, order = Order.RAND, breed, type = Image.ALL }: GetCatsArgs): Promise<Cat[]> {
    if (limit > 20) limit = 20

    // Initialize URLSearchParams with the optional "breed" and "order" parameter
    const searchParams = new URLSearchParams({
        has_breeds: "1",
        type,
        limit: limit.toString(),
    })
    if (breed) {
        searchParams.append("breed_ids", breed.toString())
    }
    if (order) {
        searchParams.append("order", order)
    }

    try {
        const cats: Cat[] = await getData<Cat[]>({ path: "/images/search?", searchParams, revalidate: 60 * 60 * 24 * 7 })
        return cats
    } catch (error: any) {
        console.error("Error fetching cats:", error);
        throw error;
    }
}

