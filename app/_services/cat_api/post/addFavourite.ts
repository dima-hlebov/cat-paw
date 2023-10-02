import { ContentType, postData } from "@app/_lib/utils";
import { AddFavourite, ResponseFavorite } from "@app/_types/cat_api";

export async function addFavourite({ body }: { body: AddFavourite }) {
    const favourite: ResponseFavorite = await postData<AddFavourite, ResponseFavorite>(
        {
            path: "/favourites",
            contentType: ContentType.JSON,
            body: body
        })

    return favourite
}