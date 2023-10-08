import { getVotes } from "@services/cat_api/get/getVotes"
import { Breadcrumbs } from "@components/navigations"
import Gallery, { GalleryItem, renderGridItem } from "@components/widgets/gallery"
import { SearchParams, getSearchParams, paginate } from "@lib/utils"
import { defaultLimit } from "@services/cat_api"
import { Limit, Vote, isValueInLimit } from "@app/_types/cat_api"
import Pagination from "@app/_components/widgets/pagination/Pagination"
import Alert from "@app/_components/alerts"

export default async function likes({ searchParams }: SearchParams) {
    const limit = getSearchParams(searchParams?.limit, defaultLimit.toString())
    const page = getSearchParams(searchParams?.page, "0")

    const validatedLimit: Limit = isValueInLimit(Number(limit)) ? Number(limit) as Limit : defaultLimit
    const validatedPage: number = Number(page) && Number(page) > 0 ? Number(page) : 0

    const votes: Vote[] = await getVotes({})
    const likes: Vote[] = votes.filter(vote => vote.value === 1)

    const [currentLikes, nextLikes] = paginate<Vote>(validatedPage, validatedLimit, likes)

    return (
        <div className="flex flex-col h-full">
            <Breadcrumbs />
            <main className="flex flex-col flex-grow mt-sm sm:mt-md">
                {currentLikes.length
                    ? <Gallery>
                        {currentLikes.map((like, i) => (
                            <GalleryItem
                                key={like.id}
                                image={{ src: like.image.url, alt: "Liked cat", width: 500, height: 500 }}
                                itemLayout={renderGridItem(i)}
                            />
                        ))}
                    </Gallery>
                    : <Alert text={"No item found"} />}
                <div className="flex flex-grow items-end justify-center mt-sm">
                    {currentLikes.length
                        ? <Pagination
                            hrefBase={`likes?`}
                            limit={validatedLimit}
                            currentPage={validatedPage}
                            isNextPage={nextLikes.length ? true : false}
                        />
                        : null}
                </div>
            </main>
        </div>
    )
}
