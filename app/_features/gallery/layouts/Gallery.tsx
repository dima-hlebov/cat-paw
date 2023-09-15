import React from "react";

import { GalleryItem } from '@features/gallery'

export enum GalleryType {
    LINKS,
    BUTTONS,
}

type GalleryProps = {
    images: { id: number, src: string, alt: string }[]
    type: GalleryType
}

// temp props type
// Renders gallery items based on type provided 

export function Gallery({ images, type = GalleryType.BUTTONS }: GalleryProps) {
    return (
        <div className="grid grid-cols-3 gap-md">
            {type === GalleryType.LINKS
                ? images.map((image, i) => (
                    <GalleryItem key={i} className={renderGrid(i)} link={{ href: `breeds/${image.id}` }} image={{ src: image.src, alt: image.alt }} />
                ))
                : images.map((image, i) => (
                    <GalleryItem key={image.id} className={renderGrid(i)} image={{ src: image.src, alt: image.alt }} />
                ))
            }
        </div>
    )
}

function renderGrid(i: number): string {
    const cellNum = i % 10
    switch (cellNum) {
        case 0:
            return "row-span-2"
        case 3:
            return "col-span-2 row-span-2"
        case 7:
            return "row-span-2"
        case 8:
            return "col-span-2 row-span-2"
        default:
            return ""
    }
}