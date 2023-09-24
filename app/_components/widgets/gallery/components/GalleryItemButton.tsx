import IconWrapper from "@components/icons";
import Button from "@components/buttons";
import { GalleryItem, GalleryItemButtonProps } from "@components/widgets/gallery";

export function GalleryItemButton({ itemLayout, icon, image, onClick }: GalleryItemButtonProps) {
    return (
        <GalleryItem image={image} itemLayout={itemLayout}>
            <div className="absolute transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 opacity-0 w-fit top-1/2 left-1/2 group-hover:opacity-100">
                <Button onClick={onClick} variant={"monochrome"} size={"sm"} className="dark:bg-zinc-800">
                    <IconWrapper Icon={icon} size="md" />
                </Button>
            </div>
        </GalleryItem>
    )
}