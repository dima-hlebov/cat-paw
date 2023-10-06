import { getData } from "@app/_lib/utils"
import { Favourite } from "@app/_types/cat_api"
import { cookies } from "next/headers"

export async function getFavourites(): Promise<Favourite[]> {
    const searchParams = new URLSearchParams()
    const userId = cookies().get("userId")
    if (userId) {
        searchParams.append("sub_id", userId.value)
    }

    const breeds: Favourite[] = await getData<Favourite[]>({ path: `/favourites?`, searchParams, revalidate: 0 })
    return breeds
}