import Carousel from "@components/widgets/carousel";
import { Breadcrumbs } from "@app/_components/navigations";
import InfoCard from "@components/cards/InfoCard";

import { Breed, Cat } from "@app/_types/cat_api";


import { ImageProps } from "next/image";
import { getBreed, getCats } from "@services/cat_api";
import { getFirstSentence } from "@app/_lib/utils";

export default async function Breed({ params }: { params: { id: string } }) {
    const cats: Cat[] = await getCats({ breed: params.id, limit: 5 })
    const breed: Breed = cats[0].breeds[0]

    const images: ImageProps[] = cats.map(cat => {
        return {
            src: cat.url,
            alt: cat.breeds[0].name,
            width: cat.width,
            height: cat.height
        }
    })

    return (
        <div>
            <Breadcrumbs />
            <main className="mt-md">
                <Carousel slides={images} />
                <div className="mt-2xl">
                    <InfoCard
                        mainHeading={breed.name}
                        secondaryHeading={getFirstSentence(breed.description)}
                        info={
                            [
                                {
                                    title: "Temperament",
                                    text: breed.temperament
                                },
                                {
                                    title: "Origin",
                                    text: breed.origin
                                },
                                {
                                    title: "Weight",
                                    text: breed.weight.metric
                                },
                                {
                                    title: "Life span",
                                    text: breed.life_span
                                }
                            ]
                        }
                    />
                </div>
            </main>
        </div >
    )
}
