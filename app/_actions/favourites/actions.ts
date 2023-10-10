"use server"

import { addFavourite, deleteFavourite } from "@app/_services/cat_api"
import { AddFavourite, ResponseFavorite } from "@app/_types/cat_api"
import { revalidatePath, revalidateTag } from "next/cache"
import { cookies } from "next/headers"

export async function addFavouriteAction(catId: string, revalidationPath: string) {

    const body: AddFavourite = { image_id: catId, sub_id: "" }
    const userId = cookies().get("userId")
    if (userId) {
        body.sub_id = userId.value
    }

    const favouriteRes: ResponseFavorite = await addFavourite({ body })
    revalidateTag(revalidationPath)

    return { data: favouriteRes }
}

export async function deleteFavouriteAction(favId: string, revalidationPath: string) {
    const favouriteRes: ResponseFavorite = await deleteFavourite({ imageId: favId })
    revalidateTag(revalidationPath)

    return { data: favouriteRes }
}