import { ContentType, deleteData } from "@app/_lib/utils";
import { ResponseFavorite } from "@app/_types/cat_api";

export async function deleteFavourite({ imageId }: { imageId: string }) {
    const favourite: ResponseFavorite = await deleteData<ResponseFavorite>(
        {
            path: `/favourites/${imageId}`,
            contentType: ContentType.JSON,
        })

    return favourite
}