import { ContentType, postData } from "@app/_lib/utils";
import { ResponseImage } from "@app/_types/cat_api";

export async function uploadImage({ formData }: { formData: FormData }) {
    const uploadRes: ResponseImage =
        await postData<FormData, ResponseImage>(
            {
                path: "/images/upload",
                contentType: ContentType.FORMDATA,
                body: formData
            })

    return uploadRes
}