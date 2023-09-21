import { Breadcrumbs } from "@components/navigations";
import { FilterForm } from "@components/forms";
import Gallery, { GalleryItemButton, renderGridItem } from "@components/widgets/gallery";

import CatPic from "@img/cat-pic.jpg"
import UploadButton from "./components/UploadButton";
import { UploadModal } from "@components/modals";
import { FavIcon } from "@app/_components/icons";

export default function GalleryPage() {
    const images = [
        { id: 1, src: CatPic, name: "cat", width: 1200, height: 1400 },
        { id: 2, src: CatPic, name: "cat", width: 1200, height: 1400 },
        { id: 3, src: CatPic, name: "cat", width: 1200, height: 1400 },
        { id: 4, src: CatPic, name: "cat", width: 1200, height: 1400 },
        { id: 5, src: CatPic, name: "cat", width: 1200, height: 1400 },
        { id: 6, src: CatPic, name: "cat", width: 1200, height: 1400 },
        { id: 7, src: CatPic, name: "cat", width: 1200, height: 1400 },
        { id: 8, src: CatPic, name: "cat", width: 1200, height: 1400 },
        { id: 9, src: CatPic, name: "cat", width: 1200, height: 1400 },
        { id: 10, src: CatPic, name: "cat", width: 1200, height: 1400 },
        { id: 11, src: CatPic, name: "cat", width: 1200, height: 1400 },
        { id: 12, src: CatPic, name: "cat", width: 1200, height: 1400 },
        { id: 13, src: CatPic, name: "cat", width: 1200, height: 1400 },
        { id: 14, src: CatPic, name: "cat", width: 1200, height: 1400 },
        { id: 15, src: CatPic, name: "cat", width: 1200, height: 1400 },
        { id: 16, src: CatPic, name: "cat", width: 1200, height: 1400 },
        { id: 17, src: CatPic, name: "cat", width: 1200, height: 1400 },
        { id: 18, src: CatPic, name: "cat", width: 1200, height: 1400 },
        { id: 19, src: CatPic, name: "cat", width: 1200, height: 1400 },
        { id: 20, src: CatPic, name: "cat", width: 1200, height: 1400 },
        { id: 21, src: CatPic, name: "cat", width: 1200, height: 1400 },
    ]

    return (
        <div>
            <UploadModal />
            <div className="flex flex-col justify-between gap-sm sm:flex-row">
                <Breadcrumbs />
                <UploadButton />
            </div>
            <main className="mt-sm sm:mt-md">
                <div className="rounded-md px-md pt-sm pb-md bg-secondary dark:bg-white/5">
                    <FilterForm />
                </div>
                <div className="mt-sm sm:mt-md">
                    <Gallery>
                        {images.map((image, i) => (
                            <GalleryItemButton key={image.id} icon={FavIcon} image={{ src: image.src, alt: image.name, width: image.width, height: image.height }} itemLayout={renderGridItem(i)} />
                        ))}
                    </Gallery>
                </div>
            </main>
        </div>
    )
}
