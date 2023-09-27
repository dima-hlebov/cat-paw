import { Cat, Image, Limit, Order, isValueInImage, isValueInLimit, isValueInOrder } from "@app/_types/cat_api"
import { getData } from "@lib/utils"
import { breedIdPattern, defaultBreed, defaultLimit } from "@services/cat_api"

export type GetCatsArgs = {
    limit?: Limit
    order?: Order
    breed?: string
    type?: Image
}

export async function getCats({ breed, limit, order, type = Image.ALL }: GetCatsArgs): Promise<Cat[]> {
    // Validate input and Initialize URLSearchParams with the optional "breed" and "order" parameters
    const searchParams = new URLSearchParams({
        has_breeds: "1",
    })
    if (breed && breed !== defaultBreed && breedIdPattern.test(breed)) {
        searchParams.append("breed_ids", breed.toString())
    }
    if (order) {
        if (!isValueInOrder(order)) order = Order.ASC
        searchParams.append("order", order)
    }
    if (limit) {
        if (!isValueInLimit(limit)) limit = defaultLimit
        searchParams.append("limit", limit.toString())
    }
    if (!isValueInImage(type)) searchParams.append("type", type)

    try {
        const cats: Cat[] = await getData<Cat[]>({ path: "/images/search?", searchParams, revalidate: 60 * 60 * 24 * 7 })
        return cats
    } catch (error: any) {
        console.error("Error fetching cats:", error);
        throw error;
    }
}

