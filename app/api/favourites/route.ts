import { getUserId } from "@app/_lib/utils/cookies"
import { addFavourite } from "@app/_services/cat_api/post/addFavourite"
import { AddFavourite } from "@app/_types/cat_api"
import { NextRequest } from "next/server"

export async function POST(req: NextRequest) {
    const favourite: AddFavourite = await req.json()
    favourite.sub_id = getUserId(req)

    const resUpload = await addFavourite({ body: favourite })
    return Response.json(resUpload)
}