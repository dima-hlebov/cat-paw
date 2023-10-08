import { Breadcrumbs } from "@components/navigations";
import Gallery, { GalleryItemPlaceholder, renderGridItem } from "@components/widgets/gallery";
import Alert from "@components/alerts/Alert";
import { GalleryFilter, UploadButton, UploadModal } from "./components";



import { defaultBreed, defaultLimit, getBreeds, getCats } from "@app/_services/cat_api";
import { SearchParams, getSearchParams } from "@lib/utils";
import { BreedName, Cat, Image, Limit, Order, isValueInImage, isValueInLimit, isValueInOrder } from "@app/_types/cat_api";
import FavouriteButton from "./components/buttons/FavouriteButton";
import Pagination from "@app/_components/widgets/pagination/Pagination";

export default async function GalleryPage({ searchParams }: SearchParams) {
    const breedId: string = getSearchParams(searchParams?.breed, defaultBreed)
    const limit: string = getSearchParams(searchParams?.limit, defaultLimit.toString())
    const page = getSearchParams(searchParams?.page, "0")
    const order: string = getSearchParams(searchParams?.order, Order.RAND)
    const type: string = getSearchParams(searchParams?.type, Image.STATIC)

    const validatedLimit: Limit = isValueInLimit(Number(limit)) ? Number(limit) as Limit : defaultLimit
    const validatedPage: number = Number(page) && Number(page) > 0 ? Number(page) : 0
    const validatedOrder: Order = isValueInOrder(order) ? order : Order.ASC
    const validatedType: Image = isValueInImage(type) ? type : Image.STATIC


    // Some images doesn't have breed. So when breed is specified we have to get images only with breed info
    const currentCatsData: Promise<Cat[]> = breedId !== defaultBreed
        ? getCats({ breed: breedId, has_breeds: 1, limit: validatedLimit, page: validatedPage, order: validatedOrder, type: validatedType })
        : getCats({ breed: breedId, limit: validatedLimit, page: validatedPage, order: validatedOrder, type: validatedType })
    // To check if there next page
    const nextCatsData: Promise<Cat[]> = breedId !== defaultBreed
        ? getCats({ breed: breedId, has_breeds: 1, limit: validatedLimit, page: validatedPage + 1, order: validatedOrder, type: validatedType })
        : getCats({ breed: breedId, limit: validatedLimit, page: validatedPage + 1, order: validatedOrder, type: validatedType })

    const breedNamesData: Promise<BreedName[]> = getBreeds({})

    const [breedNames, currentCats, nextCats] = await Promise.all([breedNamesData, currentCatsData, nextCatsData])

    return (
        <div>
            <UploadModal />
            <div className="flex flex-col justify-between gap-sm sm:flex-row">
                <Breadcrumbs />
                <UploadButton />
            </div>
            <main className="mt-sm sm:mt-md">
                <div className="rounded-md px-sm sm:px-md pt-sm pb-md bg-secondary dark:bg-white/5">
                    <GalleryFilter breeds={breedNames} />
                </div>
                <div className="mt-sm sm:mt-md">
                    {currentCats.length
                        ? <Gallery>
                            {currentCats.map((cat, i) => (
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
                    <div className="flex flex-grow items-end justify-center mt-sm">
                        {currentCats.length
                            ? <Pagination
                                hrefBase={`gallery?breed=${breedId}&order=${validatedOrder}&type=${validatedType}&`}
                                limit={validatedLimit}
                                currentPage={validatedPage}
                                isNextPage={nextCats.length ? true : false}
                            />
                            : null}
                    </div>
                </div>
            </main>
        </div>
    )
}
