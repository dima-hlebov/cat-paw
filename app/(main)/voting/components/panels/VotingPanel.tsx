import Image from "next/image";
import { Cat } from "@app/_types/cat_api";
import VotingButtonGroup from "../buttons/VotingButtonGroup";

export function VotingPanel({ cat }: { cat: Cat }) {
    return (
        <div className="relative">
            <Image
                alt={cat.breeds.length ? cat.breeds[0].name : "Random cat"}
                quality={100}
                src={cat.url}
                width={cat.width}
                height={cat.height}
                className="aspect-[4/3] sm:aspect-video object-cover object-center rounded-md w-full" />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-[-50%]">
                <VotingButtonGroup cat={cat} />
            </div>
        </div>
    )
}
