import { ContentType, postData } from "@app/_lib/utils";
import { ImageUpload, ResponseImageUpload } from "@app/_types/cat_api";

export async function uploadImage({ body }: { body: ImageUpload }) {
    const favourite: ResponseImageUpload =
        await postData<ImageUpload, ResponseImageUpload>(
            {
                path: "/favourites",
                contentType: ContentType.JSON,
                body: body
            })

    return favourite
}