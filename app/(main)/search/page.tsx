"use client"

import { Gallery, GalleryType } from '@app/_components/widgets/gallery'
import { useAppSelector } from '@app/_hooks'
import { Breadcrumbs } from '@components/navigations'

import CatPic from "@img/cat-pic.jpg"

export default function Search() {
    const { query } = useAppSelector(state => state.searchReducer)

    return (
        <div>
            <Breadcrumbs />
            <main className="mt-sm sm:mt-md">
                <div>Search results for: <span className="text-dark capitalize">{query}</span></div>
                <div className="mt-sm sm:mt-md">
                    <Gallery
                        images={[
                            { id: 1, src: CatPic, alt: "cat" },
                            { id: 2, src: CatPic, alt: "cat" },
                            { id: 3, src: CatPic, alt: "cat" },
                            { id: 4, src: CatPic, alt: "cat" },
                            { id: 5, src: CatPic, alt: "cat" },
                            { id: 6, src: CatPic, alt: "cat" },
                            { id: 7, src: CatPic, alt: "cat" },
                            { id: 8, src: CatPic, alt: "cat" },
                            { id: 9, src: CatPic, alt: "cat" },
                            { id: 10, src: CatPic, alt: "cat" },
                            { id: 11, src: CatPic, alt: "cat" },
                            { id: 12, src: CatPic, alt: "cat" },
                            { id: 13, src: CatPic, alt: "cat" },
                            { id: 14, src: CatPic, alt: "cat" },
                            { id: 15, src: CatPic, alt: "cat" },
                            { id: 16, src: CatPic, alt: "cat" },
                            { id: 17, src: CatPic, alt: "cat" },
                            { id: 18, src: CatPic, alt: "cat" },
                            { id: 19, src: CatPic, alt: "cat" },
                            { id: 20, src: CatPic, alt: "cat" },
                            { id: 21, src: CatPic, alt: "cat" },
                        ]}
                        type={GalleryType.LINKS} />
                </div>
            </main>
        </div>
    )
}
