import { Breadcrumbs } from "@components/navigations"
import Gallery, { GalleryItem, renderGridItem } from "@components/widgets/gallery"
import { getImages } from "@app/_db/db"

import CatPic from "@img/cat-pic.jpg"

export default function Dislikes() {
    const images = getImages()

    return (
        <div>
            <Breadcrumbs />
            <main className="mt-sm sm:mt-md">
                <Gallery>
                    {images.map((image, i) => (
                        <GalleryItem
                            key={image.id}
                            image={{ src: image.src, alt: image.name, width: image.width, height: image.height }}
                            itemLayout={renderGridItem(i)}
                        />
                    ))}
                </Gallery>
            </main>
        </div>
    )
}
