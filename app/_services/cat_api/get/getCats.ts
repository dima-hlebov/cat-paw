import { Cat, ImageType, OrderType } from "@app/_types/cat_api"
import { getData } from "@lib/utils"

type GetCatsArgs = {
    limit: LimitType
    order?: OrderType
    breed?: string
    type: ImageType
}

export async function getCats({ limit = 5, order = OrderType.RAND, breed, type = ImageType.ALL }: GetCatsArgs): Promise<Cat[]> {
    // Initialize URLSearchParams with the optional "breed" and "order" parameter
    const searchParams = new URLSearchParams({
        has_breeds: "1",
        limit: limit.toString(),
        type: type,
    })
    if (breed) {
        searchParams.append("breed_ids", breed.toString())
    }
    if (order) {
        searchParams.append("oreder", order)
    }

    try {
        const cats: Cat[] = await getData<Cat[]>({ path: "/images/search?", searchParams, revalidate: 60 * 60 * 24 * 7 })
        return cats
    } catch (error: any) {
        console.error("Error fetching cats:", error);
        throw error;
    }
}

