import { ImageType } from "./ComponentTypes";
import Image from "next/image";
import IconBtn from "./IconBtn";
import FavSvg20 from "./icons/FavSvg20";
import FavFullSvg20 from "./icons/FavFullSvg20";

export default function GalleryItem({ image: { src, alt } }: ImageType) {
    return (
        <div className="group relative cursor-pointer" >
            <Image src={src} alt={alt} className="rounded-[20px]" />
            <div className="absolute top-0 w-full h-full rounded-[20px] group-hover:bg-primary/60 transition-all"></div>
            <div className="group w-fit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <IconBtn
                    Icon={{ Icon: FavSvg20, IconActive: FavFullSvg20 }}
                    isAbsolute
                />
            </div>

        </div>
    )
}
