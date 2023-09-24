import Image from "next/image";
import { GalleryItemProps } from "@components/widgets/gallery";

export function GalleryItem({ itemLayout, children, image: { src, alt, ...imageProps } }: GalleryItemProps) {
    return (
        <div className={`group relative aspect-[4/3] ${itemLayout}`} >
            <Image src={src} alt={alt} className="object-cover h-full rounded-md" {...imageProps} />
            {children
                //overlay
                ? <div className="absolute top-0 w-full h-full transition-all duration-300 rounded-md group-hover:bg-primary/60">
                    {children}
                </div>
                : null
            }
        </div>
    )
}