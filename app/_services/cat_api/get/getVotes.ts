import { getData } from "@app/_lib/utils"
import { Vote } from "@app/_types/cat_api"
import { cookies } from "next/headers"

export async function getVotes(): Promise<Vote[]> {
    const searchParams = new URLSearchParams()
    const userId = cookies().get("userId")
    if (userId) {
        searchParams.append("sub_id", userId.value)
    }

    const breeds: Vote[] = await getData<Vote[]>({ path: `/votes?`, searchParams, revalidate: 0 })
    return breeds
}