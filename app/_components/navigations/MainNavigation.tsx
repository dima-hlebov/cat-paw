import { Navigation } from "@layouts/index";
import { ImageLink } from "@components/buttons";

// img
import VotingImg from "@img/voting.png"
import BreedsImg from "@img/breeds.png"
import GalleryImg from "@img/gallery.png"
import { OnClick } from "@app/_types/handlers";

type MainNavigationProps = {
    onClick?: OnClick<HTMLAnchorElement>
}

export function MainNavigation({ onClick }: MainNavigationProps) {
    return (
        <Navigation className="flex flex-col mt-md gap-md md:flex-row md:gap-[16px]">
            <ImageLink onClick={onClick} href={"/voting"} name={"Voting"} image={{ src: VotingImg, alt: "Clipboard", width: "100" }} />
            <ImageLink onClick={onClick} href={"/breeds"} name={"Breeds"} image={{ src: BreedsImg, alt: "Waving cat", width: "117" }} />
            <ImageLink onClick={onClick} href={"/gallery"} name={"Gallery"} image={{ src: GalleryImg, alt: "Hand hodling phone", width: "112" }} />
        </Navigation>
    )
}
