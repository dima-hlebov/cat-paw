import { Navigation } from "@components/ui/navigations/Nav";
import { ImageLink } from "@components/buttons";

// img
import VotingImg from "@img/voting.png"
import BreedsImg from "@img/breeds.png"
import GalleryImg from "@img/gallery.png"

export function MainNavigation() {
    return (
        <Navigation className="flex flex-col mt-[20px] gap-[20px] md:flex-row md:gap-[16px]">
            <ImageLink href={"/voting"} name={"Voting"} image={{ src: VotingImg, alt: "Clipboard", width: "100" }} />
            <ImageLink href={"/breeds"} name={"Breeds"} image={{ src: BreedsImg, alt: "Waving cat", width: "117" }} />
            <ImageLink href={"/gallery"} name={"Gallery"} image={{ src: GalleryImg, alt: "Hand hodling phone", width: "112" }} />
        </Navigation>
    )
}
