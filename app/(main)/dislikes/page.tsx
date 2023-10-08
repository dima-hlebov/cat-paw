import Alert from "@components/alerts"
import { Breadcrumbs } from "@components/navigations"
import Gallery, { GalleryItem, renderGridItem } from "@components/widgets/gallery"
import Pagination from "@components/widgets/pagination/Pagination"

import { SearchParams, getSearchParams, paginate } from "@lib/utils"
import { defaultLimit } from "@services/cat_api"
import { getVotes } from "@services/cat_api/get/getVotes"
import { Limit, isValueInLimit, Vote } from "@app/_types/cat_api"


export default async function Likes({ searchParams }: SearchParams) {
    const limit = getSearchParams(searchParams?.limit, defaultLimit.toString())
    const page = getSearchParams(searchParams?.page, "0")

    const validatedLimit: Limit = isValueInLimit(Number(limit)) ? Number(limit) as Limit : defaultLimit
    const validatedPage: number = Number(page) && Number(page) > 0 ? Number(page) : 0

    const votes: Vote[] = await getVotes({})
    const dislikes: Vote[] = votes.filter(vote => vote.value === -1)

    const [currentDislikes, nextDisLikes] = paginate<Vote>(validatedPage, validatedLimit, dislikes)
    return (
        <div className="flex flex-col h-full">
            <Breadcrumbs />
            <main className="flex flex-col flex-grow mt-sm sm:mt-md">
                {currentDislikes.length
                    ? <Gallery>
                        {currentDislikes.map((dislike, i) => (
                            <GalleryItem
                                key={dislike.id}
                                image={{ src: dislike.image.url, alt: "Disliked cat", width: 500, height: 500 }}
                                itemLayout={renderGridItem(i)}
                            />
                        ))}
                    </Gallery>
                    : <Alert text={"No item found"} />
                }
                <div className="flex flex-grow items-end justify-center mt-sm">
                    {currentDislikes.length
                        ? <Pagination
                            hrefBase={`likes?`}
                            limit={validatedLimit}
                            currentPage={validatedPage}
                            isNextPage={nextDisLikes.length ? true : false}
                        />
                        : null}
                </div>
            </main>
        </div>
    )
}
