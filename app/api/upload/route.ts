import { getUserId } from "@app/_lib/utils/cookies"
import { uploadImage } from "@app/_services/cat_api/post/uploadImage"
import { NextRequest } from "next/server"

export async function POST(req: NextRequest) {
    const formData = await req.formData()
    formData.append("sub_id", getUserId(req))

    const resFavourite = await uploadImage({ formData: formData })

    return Response.json(resFavourite)
}
