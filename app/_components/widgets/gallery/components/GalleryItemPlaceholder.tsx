"use client"
import { GalleryItem, GalleryItemPlaceholderProps } from "@components/widgets/gallery";

export function GalleryItemPlaceholder({ itemLayout, image, children }: GalleryItemPlaceholderProps) {
    return (
        <GalleryItem image={image} itemLayout={itemLayout}>
            <div className="absolute transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 opacity-0 w-fit top-1/2 left-1/2 group-hover:opacity-100">
                {children}
            </div>
        </GalleryItem>
    )
}