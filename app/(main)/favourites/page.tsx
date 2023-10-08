import Alert from "@components/alerts"
import { Breadcrumbs } from "@components/navigations"
import Gallery, { GalleryItemPlaceholder, renderGridItem } from "@components/widgets/gallery"

import { getFavourites } from "@services/cat_api/get/getFavourites"
import FavouriteButton from "./components/buttons/FavouriteButton"
import FavouriteLogs from "./components/lists/FavouriteLogs"
import { SearchParams, getSearchParams } from "@app/_lib/utils"
import { defaultLimit } from "@app/_services/cat_api"
import { Limit, isValueInLimit } from "@app/_types/cat_api"
import Pagination from "@app/_components/widgets/pagination/Pagination"

export default async function Favourites({ searchParams }: SearchParams) {
    const limit = getSearchParams(searchParams?.limit, defaultLimit.toString())
    const page = getSearchParams(searchParams?.page, "0")

    const validatedLimit: Limit = isValueInLimit(Number(limit)) ? Number(limit) as Limit : defaultLimit
    const validatedPage: number = Number(page) && Number(page) > 0 ? Number(page) : 0

    const [currentFavourites, nextFavourites] = await Promise.all([
        getFavourites({ limit: validatedLimit, page: validatedPage }),
        getFavourites({ limit: validatedLimit, page: validatedPage + 1 }),
    ])

    return (
        <div className="flex flex-col h-full">
            <Breadcrumbs />
            <main className="flex flex-col justify-between flex-grow mt-sm sm:mt-md">
                {currentFavourites.length
                    ? <Gallery>
                        {currentFavourites.map((favourite, i) => (
                            <GalleryItemPlaceholder
                                key={favourite.id}
                                image={{ src: favourite.image?.url as string, alt: "Favourite cat", width: 500, height: 500 }}
                                itemLayout={renderGridItem(i)}
                            >
                                <FavouriteButton favourite={favourite} />
                            </GalleryItemPlaceholder>
                        ))}
                    </Gallery>
                    : <Alert text={"No item found"} />
                }
                <div className="flex flex-grow items-end justify-center mt-sm">
                    {currentFavourites.length
                        ? <Pagination
                            hrefBase={`favourites?`}
                            limit={validatedLimit}
                            currentPage={validatedPage}
                            isNextPage={nextFavourites.length ? true : false}
                        />
                        : null}
                </div>
                <div className="mt-xl overflow-y-auto max-h-[30vh]">
                    <FavouriteLogs />
                </div>
            </main>
        </div>
    )
}

export const revalidate = 0