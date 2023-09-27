import { Suspense } from "react";

import { Breadcrumbs } from "@components/navigations";
import Gallery, { GalleryItemLink, renderGridItem } from "@components/widgets/gallery";
import { BreedFilter } from "./components/BreedFilter";

import { GetBreedsArgs, GetCatsByBreedArgs, defaultLimit, defaultOrder, getBreeds, getCatsByBreed } from "@services/cat_api";
import { Breed, BreedName, Cat, Limit, isValueInLimit, isValueInOrder } from "@app/_types/cat_api";
import { getSearchParam } from "@lib/utils";

type BreedsArgs = {
    searchParams: { [key: string]: string | string[] | undefined };
}

export default async function Breeds({ searchParams }: BreedsArgs) {
    const breedId = getSearchParam(searchParams?.breed)
    const limit = getSearchParam(searchParams?.limit)
    const order = getSearchParam(searchParams?.order)

    // Populate gallery
    let catsData: Promise<Cat[]> | null = null
    let breedsData: Promise<Breed[]> | null = null

    // Get specified breed
    if (breedId && breedId !== "all") {
        let params: GetCatsByBreedArgs = { id: breedId }
        if (limit) params.limit = isValueInLimit(Number(limit)) ? Number(limit) as Limit : defaultLimit
        catsData = getCatsByBreed(params)
    }
    // Get all breeds 
    else {
        let params: GetBreedsArgs = {}
        if (order) params.order = isValueInOrder(order) ? order : defaultOrder
        if (limit) params.limit = isValueInLimit(Number(limit)) ? Number(limit) as Limit : defaultLimit
        else params.limit = defaultLimit
        breedsData = getBreeds(params)
    }

    // Populate breed select
    const breedNamesData: Promise<BreedName[]> = getBreeds({})

    const [breedNames, breeds, cats] = await Promise.all([breedNamesData, breedsData, catsData])

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
                                        key={breedId}
                                        image={{ src: breed.image.url, alt: breed.name, width: breed.image.width, height: breed.image.height }}
                                        itemLayout={renderGridItem(i)}
                                        link={{ href: `breeds/${breedId}` }} />)
                            })
                            : null}
                        {cats
                            ? cats.map((cat, i) => {
                                return (
                                    <GalleryItemLink
                                        key={breedId}
                                        image={{ src: cat.url, alt: cat.breeds[0].name, width: cat.width, height: cat.height }}
                                        itemLayout={renderGridItem(i)}
                                        link={{ href: `breeds/${breedId}` }} />)
                            })
                            : null}
                    </Suspense>
                </Gallery>
            </div>
        </div>
    )
}
