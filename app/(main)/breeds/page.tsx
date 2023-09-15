import { SortForm } from "@app/_components/forms";
import { Breadcrumbs } from "@app/_components/navigations";
import { Gallery, GalleryType } from "@features/gallery";

import CatPic from "@img/cat-pic.jpg"

export default function Breeds() {
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
        </div>
    )
}
