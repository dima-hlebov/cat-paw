import { Suspense } from "react";

import { Breadcrumbs } from "@components/navigations";
import Gallery, { GalleryItemLink, renderGridItem } from "@components/widgets/gallery";
import { BreedFilter } from "./components/BreedFilter";

import { defaultBreed, defaultLimit, getBreeds, getCats } from "@services/cat_api";
import { Breed, BreedName, Cat, Limit, Order, Image } from "@app/_types/cat_api";
import { getSearchParam } from "@lib/utils";

type BreedsArgs = {
    searchParams: { [key: string]: string | string[] | undefined };
}

export default async function Breeds({ searchParams }: BreedsArgs) {
    const breedId = getSearchParam(searchParams?.breed, defaultBreed)
    const limit = getSearchParam(searchParams?.limit, defaultLimit.toString())
    const order = getSearchParam(searchParams?.order, Order.ASC)

    // Populate breed filter
    const breedNames: BreedName[] = await getBreeds({})

    // Populate gallery
    let catsData: Promise<Cat[]> | null = null
    let breedsData: Promise<Breed[]> | null = null

    // Get images of specified breed
    if (breedId && breedNames.some(name => name.id === breedId)) {
        catsData = getCats({ breed: breedId, limit: Number(limit) as Limit, type: Image.STATIC })
    }
    // Get all breeds 
    else {
        breedsData = getBreeds({ order: order as Order, limit: Number(limit) as Limit })
    }

    const [breeds, cats] = await Promise.all([breedsData, catsData])

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
                        {breeds
                            ? breeds.map((breed, i) => {
                                return (
                                    <GalleryItemLink
                                        key={breed.id}
                                        image={{ src: breed.image.url, alt: breed.name, width: breed.image.width, height: breed.image.height }}
                                        itemLayout={renderGridItem(i)}
                                        link={{ href: `breeds/${breed.id}` }} />)
                            })
                            : null}
                        {cats
                            ? cats.map((cat, i) => {
                                return (
                                    <GalleryItemLink
                                        key={cat.breeds[0].id}
                                        image={{ src: cat.url, alt: cat.breeds[0].name, width: cat.width, height: cat.height }}
                                        itemLayout={renderGridItem(i)}
                                        link={{ href: `breeds/${cat.breeds[0].id}` }} />)
                            })
                            : null}
                    </Suspense>
                </Gallery>
            </div>
        </div>
    )
}
