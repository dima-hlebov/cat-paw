import { getData } from "@app/_lib/utils"
import { Limit, Vote, isValueInLimit } from "@app/_types/cat_api"
import { cookies } from "next/headers"
import { GetFavouritesArgs } from "./getFavourites"
import { defaultLimit } from "@services/cat_api"

export async function getVotes({ limit, page }: GetFavouritesArgs): Promise<Vote[]> {
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

    const breeds: Vote[] = await getData<Vote[]>({ path: `/votes?`, searchParams, revalidate: 0 })
    return breeds
}