import Carousel from "@app/_features/carousel/components/Carousel";

import CatPic from "@img/cat-pic.jpg"
import CatPic2 from "@img/cat-pic-2.jpg"
import { Breadcrumbs } from "@app/_components/navigations";
import InfoCard from "@components/cards/InfoCard";

export default function Breed() {
    return (
        <div>
            <Breadcrumbs />
            <main className="mt-md">
                <Carousel slides={[{ src: CatPic, alt: "cat" }, { src: CatPic2, alt: "cat" }, { src: CatPic, alt: "cat" },]} />
                <div className="mt-2xl">
                    <InfoCard
                        mainHeading="Basenji"
                        secondaryHeading="Family companion cat"
                        info={
                            [
                                {
                                    title: "Temperament",
                                    text: "Active, Energetic, Independent, Intelligent, Gentle"
                                },
                                {
                                    title: "Origin",
                                    text: "US"
                                },
                                {
                                    title: "Weight",
                                    text: "3 - 5 kgs"
                                },
                                {
                                    title: "Life span",
                                    text: "14 - 15 years"
                                }
                            ]
                        }
                    />
                </div>
            </main>
        </div >
    )
}
