import { ContentType, deleteData } from "@app/_lib/utils";
import { ResponseFavorite } from "@app/_types/cat_api";

export async function deleteFavourite({ imageiId }: { imageiId: string }) {
    try {
        const favourite: ResponseFavorite = await deleteData<ResponseFavorite>(
            {
                path: `/favourites/${imageiId}`,
                contentType: ContentType.JSON,
            })

        return favourite
    } catch (error: any) {
        console.error("Error fetching favourite:", error);
        throw error;
    }
}