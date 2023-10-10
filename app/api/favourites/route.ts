import { getUserId } from "@app/_lib/utils/cookies"
import { addFavourite } from "@app/_services/cat_api/post/addFavourite"
import { AddFavourite } from "@app/_types/cat_api"
import { revalidatePath } from "next/cache"

import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest, res: NextResponse) {
    const favourite: AddFavourite = await req.json()
    favourite.sub_id = getUserId(req)

    const resUpload = await addFavourite({ body: favourite })
    revalidatePath('/favourites')

    return Response.json(resUpload)
}