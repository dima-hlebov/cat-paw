import Button, { buttonVariants } from "./components/buttons/Button";
import IconWrapper from "./components/icons/IconWrapper";
import ImageLink from "./components/buttons/ImageLink";
import Link from "./components/buttons/Link";

// image
import BackSvg from "./components/icons/BackSvg";
import SearchSvg from "./components/icons/SearchSvg";
import CloseSvg from "./components/icons/CloseSvg";
import FavSvg from "./components/icons/FavSvg";
import FavColorSvg from "./components/icons/FavFullSvg";
import SortSvg from "./components/icons/SortSvg";
import SortRevertSvg from "./components/icons/SortRevertSvg";
import UploadSvg from "./components/icons/UploadSvg";
import LikeSvg from "./components/icons/LikeSvg";
import DislikeSvg from "./components/icons/DislikeSvg";
import VotingImg from "../public/img/voting.png"
import BreedsImg from "../public/img/breeds.png"
import GalleryImg from "../public/img/gallery.png"
import CatPic from "../public/catpic.jpg"
import ButtonGroup from "./components/buttons/ButtonGroup";
import GalleryItem from "./components/GalleryItem";
import Search from "./components/inputs/Search";
import Select from "./components/inputs/Select";
import UpdateSvg from "./components/icons/UpdateSvg";


export default function Home() {
  return (
    <main >
      <div className="pt-4">
        <h2 className="text-2xl">Links</h2>
        <div className="flex justify-around pt-2">
          <ImageLink name="Voting" href="/" image={{ src: VotingImg, alt: "Clipboard", width: 100 }} />
          <ImageLink name="Breeds" href="/" image={{ src: BreedsImg, alt: "Waving cat", width: 100 }} />
          <ImageLink name="Gallery" href="/" image={{ src: GalleryImg, alt: "Hand holding phone", width: 100 }} />
        </div>
        <div className="flex justify-around pt-2">
          <Link href="/" className={buttonVariants({ variant: "activableWhite", size: "md" })} >
            <IconWrapper Icon={LikeSvg} size="md" />
          </Link>
          <Link href="/" className={buttonVariants({ variant: "activableWhite", size: "md" })} >
            <IconWrapper Icon={FavSvg} size="md" />
          </Link>
          <Link href="/" className={buttonVariants({ variant: "activableWhite", size: "md" })} >
            <IconWrapper Icon={DislikeSvg} size="md" />
          </Link>
        </div>
      </div>
      <div>
        <h2 className="text-2xl">Buttons</h2>
        <div className="flex justify-around pt-2">
          <Button variant={"primaryTransp"} size={"sm"}><IconWrapper Icon={BackSvg} /></Button>
          <Button variant={"primaryTransp"} size={"sm"}><IconWrapper Icon={SearchSvg} /></Button>
          <Button variant={"white"} size={"sm"}><IconWrapper Icon={CloseSvg} /></Button>
          <Button variant={"white"} size={"sm"}><IconWrapper Icon={FavSvg} /></Button>
          <Button variant={"white"} size={"sm"}><IconWrapper Icon={FavColorSvg} /></Button>
          <Button variant={"secondary"} size={"sm"}><IconWrapper Icon={SortSvg} /></Button>
          <Button variant={"secondary"} size={"sm"}><IconWrapper Icon={SortRevertSvg} /></Button>
        </div>
        <div className="flex justify-around pt-2">
          <Button variant={"primaryTransp"}>
            <div className="flex">
              <IconWrapper Icon={UploadSvg} size="xs" />
              <div>&nbsp;&nbsp;Upload</div>
            </div>
          </Button>
          <Button>Upload photo</Button>
        </div>
      </div>
      <div >
        <h2 className="text-2xl">Button group</h2>
        <div className="flex justify-around pt-2">
          <ButtonGroup >
            <Button variant={"groupFirst"} size={"groupSize"}>
              <IconWrapper Icon={LikeSvg} size="md" />
            </Button>
            <Button variant={"groupMiddle"} size={"groupSize"}>
              <IconWrapper Icon={FavSvg} SecondaryIcon={FavColorSvg} size="md" active="white" />
            </Button>
            <Button variant={"groupLast"} size={"groupSize"}>
              <IconWrapper Icon={DislikeSvg} size="md" />
            </Button>
          </ButtonGroup>
        </div>
      </div>
      <div>
        <h2 className="text-2xl">Gallery Item</h2>
        <div className="flex justify-around pt-2">
          <GalleryItem src={CatPic} alt="img" width={200} />
        </div>
      </div>
      <div>
        <h2 className="text-2xl">Inputs</h2>
        <div className="flex justify-around pt-2">
          <Search />
        </div>
        <div className="flex justify-around pt-2">
          <Select options={["Option 1", "Option 2"]} >
            <Button variant={"white"} size={"sm"} >

            </Button>
          </Select>
          <Select options={["Option 1", "Option 2"]} variant={"filter"} />
        </div>
      </div>
    </main>
  )
}
