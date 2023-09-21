"use client"

import Gallery, { GalleryItemLink, renderGridItem } from '@app/_components/widgets/gallery'
import { getImages } from '@app/_db/db'
import { useAppSelector } from '@app/_hooks'
import { Breadcrumbs } from '@components/navigations'

import CatPic from "@img/cat-pic.jpg"

export default function Search() {
    const { query } = useAppSelector(state => state.searchReducer)
    const images = getImages()
    return (
        <div>
            <Breadcrumbs />
            <main className="mt-sm sm:mt-md">
                <div>Search results for: <span className="text-dark capitalize">{query}</span></div>
                <div className="mt-sm sm:mt-md">
                    <Gallery>
                        {images.map((image, i) => (
                            <GalleryItemLink
                                key={image.id}
                                image={{ src: image.src, alt: image.name, width: image.width, height: image.height }}
                                itemLayout={renderGridItem(i)}
                                link={{ href: `breeds/${image.id}` }} />
                        ))}
                    </Gallery>
                </div>
            </main>
        </div>
    )
}
