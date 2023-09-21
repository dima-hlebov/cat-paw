import { Breadcrumbs } from "@components/navigations";
import { FilterForm } from "@components/forms";
import Gallery, { GalleryItemButton, renderGridItem } from "@components/widgets/gallery";
import UploadButton from "./components/UploadButton";
import { UploadModal } from "@components/modals";

import { FavIcon } from "@app/_components/icons";

import { getImages } from "@app/_db/db";

export default function GalleryPage() {
    const images = getImages()

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
