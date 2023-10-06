import { Breadcrumbs } from "@components/navigations";
import Gallery, { GalleryItemPlaceholder, renderGridItem } from "@components/widgets/gallery";
import Alert from "@components/alerts/Alert";
import { GalleryFilter, UploadButton, UploadModal } from "./components";



import { defaultBreed, defaultLimit, getBreeds, getCats } from "@app/_services/cat_api";
import { SearchParams, getSearchParams } from "@lib/utils";
import { BreedName, Cat, Image, Limit, Order } from "@app/_types/cat_api";
import FavouriteButton from "./components/buttons/FavouriteButton";

export default async function GalleryPage({ searchParams }: SearchParams) {
    const breedId: string = getSearchParams(searchParams?.breed, defaultBreed)
    const limit: Limit = Number(getSearchParams(searchParams?.limit, defaultLimit.toString())) as Limit
    const order: Order = getSearchParams(searchParams?.order, Order.RAND) as Order
    const type: Image = getSearchParams(searchParams?.type, Image.STATIC) as Image

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
                    {cats.length
                        ? <Gallery>
                            {cats.map((cat, i) => (
                                <GalleryItemPlaceholder
                                    key={cat.id}
                                    image={{ src: cat.url, alt: cat.breeds[0]?.name ? cat.breeds[0].name : "cat", width: cat.width, height: cat.height }}
                                    itemLayout={renderGridItem(i)}
                                >
                                    <FavouriteButton cat={cat} />
                                </GalleryItemPlaceholder>
                            ))}
                        </Gallery>
                        : <Alert text={"No item found"} />
                    }
                </div>
            </main>
        </div>
    )
}
