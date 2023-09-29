import { Suspense } from "react";

import { Breadcrumbs } from "@components/navigations";
import Gallery, { GalleryItemLink, renderGridItem } from "@components/widgets/gallery";
import { BreedFilter } from "./components/BreedFilter";

import { defaultBreed, defaultLimit, getBreeds, getCats } from "@services/cat_api";
import { Breed, BreedName, Cat, Limit, Order, Image, isCats } from "@app/_types/cat_api";
import { SearchParams, getSearchParam } from "@lib/utils";

export default async function Breeds({ searchParams }: SearchParams) {
    const breedId = getSearchParam(searchParams?.breed, defaultBreed)
    const limit = getSearchParam(searchParams?.limit, defaultLimit.toString())
    const order = getSearchParam(searchParams?.order, Order.ASC)

    // Populate breed filter
    const breedNames: BreedName[] = await getBreeds({})

    // Populate gallery
    const breeds: Cat[] | Breed[] = breedId && breedNames.some(name => name.id === breedId)
        // Get images of specified breed
        ? await getCats({ breed: breedId, has_breeds: 1, limit: Number(limit) as Limit, type: Image.STATIC })
        // Get all breeds 
        : await getBreeds({ order: order as Order, limit: Number(limit) as Limit })

    return (
        <div>
            <div className="flex flex-wrap">
                <div className="basis-full md:basis-auto">
                    <Breadcrumbs />
                </div>
                <div className="grow mt-sm md:mt-0 md:ml-sm">
                    <BreedFilter breeds={breedNames} />
                </div>
            </div>

            <div className="mt-sm sm:mt-md">
                <Gallery>
                    <Suspense fallback={<div>loading...</div>}>
                        {breeds && breeds.length !== 0
                            ? isCats(breeds)
                                ? breeds.map((cat, i) => {
                                    return (
                                        <GalleryItemLink
                                            key={cat.breeds[0].id}
                                            image={{ src: cat.url, alt: cat.breeds[0].name, width: cat.width, height: cat.height }}
                                            itemLayout={renderGridItem(i)}
                                            link={{ href: `breeds/${cat.breeds[0].id}` }} />)

                                })
                                : breeds.map((breed, i) => {
                                    return (
                                        <GalleryItemLink
                                            key={breed.id}
                                            image={{ src: breed.image.url, alt: breed.name, width: breed.image.width, height: breed.image.height }}
                                            itemLayout={renderGridItem(i)}
                                            link={{ href: `breeds/${breed.id}` }} />)
                                })
                            : null}
                    </Suspense>
                </Gallery>
            </div>
        </div>
    )
}
