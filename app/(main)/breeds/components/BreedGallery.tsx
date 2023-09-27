import Gallery, { GalleryItemLink, renderGridItem } from "@components/widgets/gallery";
import IconWrapper, { LoadingIcon } from "@components/icons";
import { Suspense } from "react";
import { Breed, Cat } from "@app/_types/cat_api";

export default async function BreedGallery({ breedsData, catsData, breedId }: { breedsData: Promise<Breed[]> | null, catsData: Promise<Cat[]> | null, breedId: string | undefined }) {
    const [breeds, cats] = await Promise.all([breedsData, catsData])

    return (
        <Gallery>
            <Suspense fallback={<div>loading...</div>}>
                {breeds
                    ? breeds.map((breed, i) => {
                        return (
                            <GalleryItemLink
                                key={breedId}
                                image={{ src: breed.image.url, alt: breed.name, width: breed.image.width, height: breed.image.height }}
                                itemLayout={renderGridItem(i)}
                                link={{ href: `breeds/${breedId}` }} />)
                    })
                    : null}
                {cats
                    ? cats.map((cat, i) => {
                        return (
                            <GalleryItemLink
                                key={breedId}
                                image={{ src: cat.url, alt: cat.breeds[0].name, width: cat.width, height: cat.height }}
                                itemLayout={renderGridItem(i)}
                                link={{ href: `breeds/${breedId}` }} />)
                    })
                    : null}
            </Suspense>
        </Gallery>
    )
}
