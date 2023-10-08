import { Suspense } from "react";

import { Breadcrumbs } from "@components/navigations";
import Alert from "@components/alerts";
import Gallery, { GalleryItemLink, renderGridItem } from "@components/widgets/gallery";
import { BreedFilter } from "./components/BreedFilter";

import { defaultBreed, defaultLimit, getBreeds, getCats } from "@services/cat_api";
import { BreedName, Limit, Order, Image, isCats, isValueInLimit, isValueInOrder } from "@app/_types/cat_api";
import { SearchParams, getSearchParams } from "@lib/utils";
import Pagination from "@app/_components/widgets/pagination/Pagination";

export default async function Breeds({ searchParams }: SearchParams) {
    const breedId = getSearchParams(searchParams?.breed, defaultBreed)
    const limit = getSearchParams(searchParams?.limit, defaultLimit.toString())
    const page = getSearchParams(searchParams?.page, "0")
    const order = getSearchParams(searchParams?.order, Order.ASC)

    const validatedLimit: Limit = isValueInLimit(Number(limit)) ? Number(limit) as Limit : defaultLimit
    const validatedPage: number = Number(page) && Number(page) > 0 ? Number(page) : 0
    const validatedOrder: Order = isValueInOrder(order) ? order : Order.ASC

    // Populate breed filter
    const breedNames: BreedName[] = await getBreeds({})
    // Populate gallery
    const [currentBreeds, nextBreeds] = breedId && breedNames.some(name => name.id === breedId)
        // Get images of specified breed
        ? await Promise.all([
            await getCats({ breed: breedId, has_breeds: 1, limit: validatedLimit, page: validatedPage, type: Image.STATIC, order: validatedOrder }),
            await getCats({ breed: breedId, has_breeds: 1, limit: validatedLimit, page: validatedPage + 1, type: Image.STATIC, order: validatedOrder }),
        ])
        // Get all breeds 
        : await Promise.all([
            await getBreeds({ order: validatedOrder, limit: validatedLimit, page: validatedPage, }),
            await getBreeds({ order: validatedOrder, limit: validatedLimit, page: validatedPage + 1, })
        ])

    return (
        <div className="flex flex-col h-full">
            <div className="flex flex-wrap">
                <div className="basis-full md:basis-auto">
                    <Breadcrumbs />
                </div>
                <div className="grow mt-sm md:mt-0 md:ml-sm">
                    <BreedFilter breeds={breedNames} />
                </div>
            </div>

            <main className="flex flex-col flex-grow mt-sm sm:mt-md ">
                {currentBreeds.length
                    ? <Gallery>
                        {isCats(currentBreeds)
                            ? currentBreeds.map((cat, i) => {
                                return (
                                    <GalleryItemLink
                                        key={cat.breeds[0].id}
                                        image={{ src: cat.url, alt: cat.breeds[0].name, width: cat.width, height: cat.height }}
                                        itemLayout={renderGridItem(i)}
                                        link={{ href: `breeds/${cat.breeds[0].id}` }} />)

                            })
                            : currentBreeds.map((breed, i) => {
                                return (
                                    <GalleryItemLink
                                        key={breed.id}
                                        image={{ src: breed.image?.url, alt: breed.name, width: breed.image?.width, height: breed.image?.height }}
                                        itemLayout={renderGridItem(i)}
                                        link={{ href: `breeds/${breed.id}` }} />)
                            })}
                    </Gallery>
                    : <Alert text={"No item found"} />
                }
                <div className="flex flex-grow items-end justify-center mt-sm">
                    {currentBreeds.length
                        ? <Pagination
                            hrefBase={`breeds?breed=${breedId}&order=${validatedOrder}&`}
                            limit={validatedLimit}
                            currentPage={validatedPage}
                            isNextPage={nextBreeds.length ? true : false}
                        />
                        : null}
                </div>
            </main>
        </div>
    )
}
