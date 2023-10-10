import { getData } from "@app/_lib/utils"
import { Favourite, Limit, isValueInLimit } from "@app/_types/cat_api"
import { cookies } from "next/headers"
import { defaultLimit } from "@services/cat_api"

export type GetFavouritesArgs = {
    limit?: Limit
    page?: number
}

export async function getFavourites({ limit, page }: GetFavouritesArgs): Promise<Favourite[]> {
    const searchParams = new URLSearchParams()
    const userId = cookies().get("userId")
    if (userId) {
        searchParams.append("sub_id", userId.value)
    }
    if (limit) {
        if (!isValueInLimit(limit)) limit = defaultLimit
        searchParams.append("limit", limit.toString())
    }
    if (limit && page !== undefined && page >= 0) {
        searchParams.append("page", page.toString())
    }

    const breeds: Favourite[] = await getData<Favourite[]>({ path: `/favourites?`, searchParams, revalidate: 0, tags: ["favourites"] })
    return breeds
}