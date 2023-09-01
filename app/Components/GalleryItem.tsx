import Image, { ImageProps } from "next/image";
import FavSvg from "./icons/FavSvg";
import Button from "./buttons/Button";
import IconWrapper from "./icons/IconWrapper";

export default function GalleryItem({ src, alt, ...props }: ImageProps) {
    return (
        <div className="group relative cursor-pointer" >
            <Image src={src} alt={alt} className="rounded-[20px]" {...props} />
            <div className="absolute top-0 w-full h-full rounded-[20px] group-hover:bg-primary/60 transition-all"></div>
            <div className="group w-fit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Button variant={"white"} size={"sm"}>
                    <IconWrapper Icon={FavSvg} />
                </Button>
            </div>
        </div>
    )
}
