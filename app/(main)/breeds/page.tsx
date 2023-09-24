import { SortForm } from "@components/forms";
import { Breadcrumbs } from "@components/navigations";
import Gallery, { GalleryItemLink, renderGridItem } from "@components/widgets/gallery";
import { Suspense } from "react";

import IconWrapper from "@components/icons/IconWrapper";
import { LoadingIcon } from "@components/icons";
import { getBreeds } from "@services/cat_api";

export default async function Breeds() {
    const breeds = await getBreeds({ limit: 5 })

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
                        {breeds.map((breed, i) => (
                            <GalleryItemLink
                                key={breed.id}
                                image={{ src: breed.image.url, alt: breed.name, width: breed.image.width, height: breed.image.height }}
                                itemLayout={renderGridItem(i)}
                                link={{ href: `breeds/${breed.id}` }} />))
                        }
                    </Gallery>
                </Suspense>
            </div>
        </div>
    )
}
