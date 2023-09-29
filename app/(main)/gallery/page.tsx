import { Breadcrumbs } from "@components/navigations";
import Gallery, { GalleryItemButton, renderGridItem } from "@components/widgets/gallery";
import { UploadModal } from "@components/modals";
import { FavIcon } from "@components/icons";
import { GalleryFilter, UploadButton } from "./components";


import { defaultBreed, defaultLimit, getBreeds, getCats } from "@app/_services/cat_api";
import { SearchParams, getSearchParam } from "@lib/utils";
import { BreedName, Cat, Image, Limit, Order } from "@app/_types/cat_api";
import Alert from "@app/_components/alerts/Alert";

export default async function GalleryPage({ searchParams }: SearchParams) {
    const breedId: string = getSearchParam(searchParams?.breed, defaultBreed)
    const limit: Limit = Number(getSearchParam(searchParams?.limit, defaultLimit.toString())) as Limit
    const order: Order = getSearchParam(searchParams?.order, Order.RAND) as Order
    const type: Image = getSearchParam(searchParams?.type, Image.STATIC) as Image

    // Some images doesn't have breed. So when breed is specified we have to get only images with breed info
    const catsData: Promise<Cat[]> = breedId !== defaultBreed
        ? getCats({ breed: breedId, has_breeds: 1, limit, order, type })
        : getCats({ breed: breedId, limit, order, type })

    const breedNamesData: Promise<BreedName[]> = getBreeds({})

    const [breedNames, cats] = await Promise.all([breedNamesData, catsData])

    return (
        <div>
            <UploadModal />
            <div className="flex flex-col justify-between gap-sm sm:flex-row">
                <Breadcrumbs />
                <UploadButton />
            </div>
            <main className="mt-sm sm:mt-md">
                <div className="rounded-md px-md pt-sm pb-md bg-secondary dark:bg-white/5">
                    <GalleryFilter breeds={breedNames} />
                </div>
                <div className="mt-sm sm:mt-md">
                    {cats.length !== 0 ?
                        <Gallery>
                            {cats.map((cat, i) => (
                                <GalleryItemButton
                                    key={cat.id} icon={FavIcon}
                                    image={{ src: cat.url, alt: cat.breeds[0]?.name ? cat.breeds[0].name : "cat", width: cat.width, height: cat.height }}
                                    itemLayout={renderGridItem(i)} />
                            ))}
                        </Gallery>
                        : <Alert text={"No item found"} />
                    }
                </div>
            </main>
        </div>
    )
}
