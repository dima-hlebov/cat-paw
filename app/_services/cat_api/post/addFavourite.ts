import { ContentType, postData } from "@app/_lib/utils";
import { AddFavourite, ResponseFavorite } from "@app/_types/cat_api";

export async function addFavourite({ body }: { body: AddFavourite }) {
    try {
        const favourite: ResponseFavorite = await postData<AddFavourite, ResponseFavorite>(
            {
                path: "/favourites",
                contentType: ContentType.JSON,
                body: body
            })

        return favourite
    } catch (error: any) {
        console.error("Error fetching favourite:", error);
        throw error;
    }
}