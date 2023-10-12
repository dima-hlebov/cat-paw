import { Navigation } from "@layouts/index";
import { ImageLink } from "@components/buttons";

// img
import VotingImg from "@img/voting.png"
import BreedsImg from "@img/breeds.png"
import GalleryImg from "@img/gallery.png"

export function MainNavigation({ onClick }: { onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void; }) {
    return (
        <Navigation className="flex flex-col mt-md gap-md md:flex-row md:gap-[16px]">
            <ImageLink onClick={onClick} href={"/voting"} name={"Voting"} image={{ src: VotingImg, alt: "Clipboard", width: "100" }} aria-label={`Navigate to voting`} />
            <ImageLink onClick={onClick} href={"/breeds"} name={"Breeds"} image={{ src: BreedsImg, alt: "Waving cat", width: "117" }} aria-label={`Navigate to breeds`} />
            <ImageLink onClick={onClick} href={"/gallery"} name={"Gallery"} image={{ src: GalleryImg, alt: "Hand hodling phone", width: "112" }} aria-label={`Navigate to gallery`} />
        </Navigation>
    )
}
