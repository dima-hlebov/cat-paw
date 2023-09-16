import Image, { ImageProps } from "next/image";
import Button, { ButtonGroup } from "@components/buttons";
import IconWrapper, { DislikeIcon, FavFullIcon, FavIcon, LikeIcon } from "@components/icons";

// Add voting utility using localstorage

export function VotingPanel({ image }: { image: ImageProps }) {
    return (
        <div className="relative">
            <Image
                alt={image.alt}
                quality={100}
                src={image.src}
                className="aspect-video object-cover object-center rounded-md" />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-[-50%]">
                <ButtonGroup >
                    <Button variant={"btnGroupFirst"} size={"groupSize"}>
                        <IconWrapper Icon={LikeIcon} size="md" />
                    </Button>
                    <Button variant={"btnGroupMiddle"} size={"groupSize"}>
                        <IconWrapper Icon={FavIcon} SecondaryIcon={FavFullIcon} size="md" active="white" />
                    </Button>
                    <Button variant={"btnGroupLast"} size={"groupSize"}>
                        <IconWrapper Icon={DislikeIcon} size="md" />
                    </Button>
                </ButtonGroup>
            </div>
        </div>
    )
}
