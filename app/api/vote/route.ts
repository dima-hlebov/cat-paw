import { getUserId } from "@lib/utils/cookies"
import { Vote } from "@app/_types/cat_api/Vote.types"
import { NextRequest } from "next/server"
import { addVote } from "@app/_services/cat_api/post/addVote"
import { revalidatePath } from "next/cache"

export async function POST(req: NextRequest) {
    const vote: Vote = await req.json()
    vote.sub_id = getUserId(req)

    const resUpload = await addVote({ body: vote })

    revalidatePath("/voting/")
    return Response.json(resUpload)
}