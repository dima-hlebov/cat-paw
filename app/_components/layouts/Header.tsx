// components
import Logo from '@components/Logo'
import { Navigation } from '@components/layouts'
import { ImageLink } from '@components/buttons'

// img
import VotingImg from "@img/voting.png"
import BreedsImg from "@img/breeds.png"
import GalleryImg from "@img/gallery.png"

export function Header({ isDesktop }: { isDesktop?: boolean }) {
  return (
    <div className={
      `${isDesktop ? "hidden xl:block" : "xl:hidden block"}
      w-full lg:pl-[174px] lg:py-[30px] lg:w-max p-[30px]`
    }>
      <Logo />

      <p className="mt-[80px] text-[44px] font-medium leading-[58px] text-accent">Hi!👋</p>
      <h1 className="text-xl">Welcome to MacPaw Bootcamp 2023!</h1>

      <h2 className="mt-[60px]">Lets start using The Cat API</h2>
      <Navigation className="lg:flex-row lg:gap-[16px] mt-[20px] gap-[20px]">
        <ImageLink href={"/"} name={"Voting"} image={{ src: VotingImg, alt: "Clipboard", width: "100" }} />
        <ImageLink href={"/"} name={"Breeds"} image={{ src: BreedsImg, alt: "Waving cat", width: "117" }} />
        <ImageLink href={"/"} name={"Gallery"} image={{ src: GalleryImg, alt: "Hand hodling phone", width: "112" }} />
      </Navigation>
    </div>
  )
}
