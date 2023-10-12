"use client"
import Image from "next/image";
import { Cat } from "@app/_types/cat_api";
import VotingButtonGroup from "../buttons/VotingButtonGroup";
import { useState } from "react";

export function VotingPanel({ cat }: { cat: Cat }) {
    const [ready, setReady] = useState(false);

    const handleLoad = (e: any) => {
        e.persist();
        if (e.target.srcset) {
            setReady(true);
        }
    };
    return (
        <div className="relative"
            style={{
                opacity: ready ? 1 : 0,
                transition: "opacity .3s ease-in-out"
            }}>
            {ready && <Image
                alt={cat.breeds.length ? cat.breeds[0].name : "Random cat"}
                quality={100}
                src={cat.url}
                width={cat.width}
                height={cat.height}
                className="aspect-[4/3] sm:aspect-video object-cover object-center rounded-md w-full"
                onLoad={handleLoad} />
            }
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-[-50%]">
                <VotingButtonGroup cat={cat} />
            </div>
        </div>
    )
}
