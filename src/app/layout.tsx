import "@app/global.css"
import type { Metadata } from "next";
import { Jost } from "next/font/google";

// components
import { Header, Navigation } from "@components/layouts";
import { ImageLink } from "@components/buttons";
import PageTitle from "@components/layouts/PageTitle";

// image
import VotingImg from "@img/voting.png"
import BreedsImg from "@img/breeds.png"
import GalleryImg from "@img/gallery.png"

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CatPaw",
  description: "Tinder for cats",
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <div>
          <div className="w-5/12 pl-[147px] pr-[30px] py-[30px]">
            <div>
              <Header />
              <PageTitle heading={"Welcome to MacPaw Bootcamp 2023"} paragraph={"Hi!👋"} />
              <h2 className="mt-[60px]">Lets start using The Cat API</h2>
              <Navigation className="mt-[20px] gap-[16px]">
                <ImageLink href={"/"} name={"Voting"} image={{ src: VotingImg, alt: "Clipboard", width: "100" }} />
                <ImageLink href={"/"} name={"Breeds"} image={{ src: BreedsImg, alt: "Waving cat", width: "117" }} />
                <ImageLink href={"/"} name={"Gallery"} image={{ src: GalleryImg, alt: "Hand hodling phone", width: "112" }} />
              </Navigation>
            </div>
          </div>
          <div className="w-7/12">

          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
