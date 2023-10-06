import Alert from "@components/alerts"
import { Breadcrumbs } from "@components/navigations"
import Gallery, { GalleryItemPlaceholder, renderGridItem } from "@components/widgets/gallery"

import { getFavourites } from "@services/cat_api/get/getFavourites"
import FavouriteButton from "./components/buttons/FavouriteButton"
import FavouriteLogs from "./components/lists/FavouriteLogs"

export default async function Favourites() {
    const favourites = await getFavourites()

    return (
        <div>
            <Breadcrumbs />
            <main className="mt-sm sm:mt-md">
                {favourites.length
                    ? <Gallery>
                        {favourites.map((favourite, i) => (
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
                <div className="mt-xl">
                    <FavouriteLogs />
                </div>
            </main>
        </div>
    )
}

export const revalidate = 0