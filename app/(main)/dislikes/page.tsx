import { Breadcrumbs } from "@app/_components/navigations"
import { Gallery, GalleryType } from "@features/gallery"

import CatPic from "@img/cat-pic.jpg"

export default function Likes() {
    return (
        <div>
            <Breadcrumbs />
            <main className="mt-sm sm:mt-md">
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
                />
            </main>
        </div>
    )
}
