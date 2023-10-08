import Gallery, { GalleryItemLink, renderGridItem } from '@components/widgets/gallery'
import { Breadcrumbs } from '@components/navigations'

import { SearchParams, getSearchParams, paginate } from '@lib/utils'
import { defaultLimit, getBreeds } from '@services/cat_api'
import { Breed, Limit, isValueInLimit } from '@app/_types/cat_api'
import Alert from '@components/alerts'
import Pagination from '@app/_components/widgets/pagination/Pagination'

export default async function Search({ searchParams }: SearchParams) {
    const limit = getSearchParams(searchParams?.limit, defaultLimit.toString())
    const page = getSearchParams(searchParams?.page, "0")
    const breedIds = getSearchParams(searchParams?.breeds).split(",")
    const query = getSearchParams(searchParams?.q)

    const validatedLimit: Limit = isValueInLimit(Number(limit)) ? Number(limit) as Limit : defaultLimit
    const validatedPage: number = Number(page) && Number(page) > 0 ? Number(page) : 0

    const breeds: Breed[] = await getBreeds({})

    const filteredBreeds: Breed[] = breeds.filter(breed => breedIds.includes(breed.id))

    const [currentFilteredBreeds, nextFilteredBreeds] = paginate<Breed>(validatedPage, validatedLimit, filteredBreeds)

    return (
        <div>
            <Breadcrumbs />
            <main className="mt-sm sm:mt-md">
                <div>Search results for: <span className="text-dark capitalize">{query}</span></div>
                <div className="mt-sm sm:mt-md">
                    {currentFilteredBreeds.length
                        ? <Gallery>
                            {currentFilteredBreeds.map((breed, i) => (
                                <GalleryItemLink
                                    key={breed.id}
                                    image={{ src: breed.image.url, alt: breed.name, width: breed.image.width, height: breed.image.height }}
                                    itemLayout={renderGridItem(i)}
                                    link={{ href: `breeds/${breed.id}` }} />
                            ))}
                        </Gallery>
                        : <Alert text={"No item found"} />}
                </div>
                <div className="flex flex-grow items-end justify-center mt-sm">
                    {currentFilteredBreeds.length
                        ? <Pagination
                            hrefBase={`likes?`}
                            limit={validatedLimit}
                            currentPage={validatedPage}
                            isNextPage={nextFilteredBreeds.length ? true : false}
                        />
                        : null}
                </div>
            </main>
        </div>
    )
}
