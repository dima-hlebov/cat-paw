import { SortForm } from "@components/forms";
import { Breadcrumbs } from "@components/navigations";
import Gallery, { GalleryItemLink, renderGridItem } from "@app/_components/widgets/gallery";
import { Suspense } from "react";

import IconWrapper from "@components/icons/IconWrapper";
import { LoadingIcon } from "@components/icons";
import { getImages } from "@app/_db/db";

export default function Breeds() {
    const images = getImages()

    return (
        <div>
            <div className="flex flex-wrap">
                <div className="basis-full md:basis-auto">
                    <Breadcrumbs />
                </div>
                <div className="grow mt-sm md:mt-0 md:ml-sm">
                    <SortForm />
                </div>
            </div>
            <div className="mt-sm sm:mt-md">
                <Suspense fallback={<IconWrapper Icon={LoadingIcon} />}>
                    <Gallery>
                        {images.map((image, i) => (
                            <GalleryItemLink
                                key={image.id}
                                image={{ src: image.src, alt: image.name, width: image.width, height: image.height }}
                                itemLayout={renderGridItem(i)}
                                link={{ href: `breeds/${image.id}` }} />
                        ))}
                    </Gallery>
                </Suspense>
            </div>
        </div>
    )
}
