import Carousel from "@app/_components/ui/carousel/Carousel";

import CatPic from "@img/cat-pic.jpg"
import CatPic2 from "@img/cat-pic-2.jpg"
import { Breadcrumbs } from "@components/ui/navigations";

export default function Breed() {
    return (
        <div>
            <Breadcrumbs />
            <main className="mt-md">
                <Carousel slides={[{ src: CatPic, alt: "cat" }, { src: CatPic2, alt: "cat" }, { src: CatPic, alt: "cat" },]} />
            </main>
        </div >
    )
}
