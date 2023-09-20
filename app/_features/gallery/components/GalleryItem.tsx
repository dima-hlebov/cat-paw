import Image, { ImageProps } from "next/image";
import IconWrapper, { FavIcon } from "@components/icons";
import Button from "@components/buttons";
import Link, { LinkProps } from "next/link";

type GalleryItemProps = {
    image: ImageProps;
    className?: string;
    link?: LinkProps;
}

export function GalleryItem({ className, link, image: { src, alt, ...imageProps } }: GalleryItemProps) {
    if (link) {
        const { href, ...linkProps } = link
        return (
            <Link href={href} className={`group relative ${className}`} {...linkProps}>
                <Image src={src} alt={alt} className="object-cover h-full rounded-md" {...imageProps} />
                <div className="absolute top-0 w-full h-full transition-all duration-300 rounded-md group-hover:bg-primary/60"></div>
                <div className="absolute bottom-0 w-full text-center transition-all duration-300 opacity-0 p-sm group-hover:opacity-100">
                    <div className="bg-white rounded-sm text-primary py-xs dark:bg-zinc-800">
                        Abyssinian
                    </div>
                </div>
            </Link>
        )
    }
    return (
        <div className={`group relative ${className}`} >
            <Image src={src} alt={alt} className="object-cover h-full rounded-md" {...imageProps} />
            <div className="absolute top-0 w-full h-full transition-all duration-300 rounded-md group-hover:bg-primary/60"></div>
            <div className="absolute transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 opacity-0 w-fit top-1/2 left-1/2 group-hover:opacity-100">
                <Button variant={"monochrome"} size={"sm"} className="dark:bg-zinc-800">
                    <IconWrapper Icon={FavIcon} size="md" />
                </Button>
            </div>
        </div>
    )
}