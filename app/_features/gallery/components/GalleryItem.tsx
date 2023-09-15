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
                <Image src={src} alt={alt} className="h-full object-cover rounded-md" {...imageProps} />
                <div className="absolute top-0 w-full h-full rounded-md group-hover:bg-primary/60 transition-all duration-300"></div>
                <div className="w-full absolute p-sm bottom-0 opacity-0 text-center group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-white rounded-sm text-primary py-xs">
                        Abyssinian
                    </div>
                </div>
            </Link>
        )
    }
    return (
        <div className={`group relative ${className}`} >
            <Image src={src} alt={alt} className="h-full object-cover rounded-md" {...imageProps} />
            <div className="absolute top-0 w-full h-full rounded-md group-hover:bg-primary/60 transition-all duration-300"></div>
            <div className="w-fit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <Button variant={"monochrome"} size={"sm"}>
                    <IconWrapper Icon={FavIcon} size="md" />
                </Button>
            </div>
        </div>
    )
}