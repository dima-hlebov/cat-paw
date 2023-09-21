import { Logs, UserAction, UserLog } from "@components/lists"
import { Breadcrumbs } from "@components/navigations"
import Gallery, { GalleryItemButton, renderGridItem } from "@app/_components/widgets/gallery"

import CatPic from "@img/cat-pic.jpg"
import { getImages } from "@app/_db/db"
import { FavIcon } from "@app/_components/icons"

export default function Favourites() {
    const images = getImages()
    const logs: UserLog[] = [
        { id: "1as12fds", timestamp: new Date(), action: UserAction.Like },
        { id: "1as12fds", timestamp: new Date(), action: UserAction.Dislike },
        { id: "1as12fds", timestamp: new Date(), action: UserAction.Favourite }
    ]

    return (
        <div>
            <Breadcrumbs />
            <main className="mt-sm sm:mt-md">
                <Gallery>
                    {images.map((image, i) => (
                        <GalleryItemButton
                            key={image.id}
                            image={{ src: image.src, alt: image.name, width: image.width, height: image.height }}
                            itemLayout={renderGridItem(i)}
                            icon={FavIcon}
                        />
                    ))}
                </Gallery>
                <div className="mt-xl">
                    <Logs logs={logs} />
                </div>
            </main>
        </div>
    )
}
