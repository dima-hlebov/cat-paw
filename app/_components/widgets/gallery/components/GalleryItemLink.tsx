import Link from "next/link";
import { GalleryItem, GalleryItemLinkProps } from "@components/widgets/gallery";

export function GalleryItemLink({ itemLayout, image, link: { href, ...linkProps } }: GalleryItemLinkProps) {
    return (
        <GalleryItem image={image} itemLayout={itemLayout}>
            <Link href={href} className={`absolute top-0 w-full h-full `} {...linkProps}>
                <div className="absolute bottom-0 w-full text-center transition-all duration-300 opacity-0 p-sm group-hover:opacity-100">
                    <div className="bg-white rounded-sm text-primary py-xs dark:bg-zinc-800">
                        {image.alt}
                    </div>
                </div>
            </Link>
        </GalleryItem>
    )
}