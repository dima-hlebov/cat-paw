import { ContentType, postData } from "@app/_lib/utils";
import { ResponseVote, Vote } from "@app/_types/cat_api/Vote.types";

export async function addVote({ body }: { body: Vote }) {
    const favourite: ResponseVote = await postData<Vote, ResponseVote>(
        {
            path: "/votes",
            contentType: ContentType.JSON,
            body: body
        })

    return favourite
}