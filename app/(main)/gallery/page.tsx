import Button from "@components/buttons";
import IconWrapper, { UploadIcon } from "@components/icons";
import { Breadcrumbs } from "@components/navigations";
import { FilterForm } from "@components/forms";
import { Gallery, GalleryType } from "@features/gallery";

import CatPic from "@img/cat-pic.jpg"

export default function GalleryPage() {
    return (
        <div>
            <div className="flex flex-col gap-sm justify-between sm:flex-row">
                <Breadcrumbs />
                <Button variant={"soft"} >
                    <div className="flex justify-center ">
                        <IconWrapper Icon={UploadIcon} size="xs" />
                        <div>&nbsp;&nbsp;Upload</div>
                    </div>
                </Button>
            </div>
            <main className="mt-sm sm:mt-md">
                <div className="px-md pt-sm pb-md bg-secondary rounded-md">
                    <FilterForm />
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
                        type={GalleryType.BUTTONS} />
                </div>
            </main>
        </div>
    )
}
