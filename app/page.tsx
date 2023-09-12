import { Container } from "@layouts/index";
import Intro from "@app/Intro";
import Image from "next/image";

import GirlAndPet from "@img/girl-and-pet.png"

export default function Home() {
  return (
    <div>
      {/* Intro is shown for small resolution displays and Intro + Container for higher resolution divices. */}
      <Container variant={"mobile"}>
        <Intro />
      </Container>
      <Container variant={"desktop"} color={"primaryTransp"}>
        <main className="w-[680px] h-[840px]">
          <Image
            src={GirlAndPet} width={775}
            alt="Girl reaching cat with open arms. Both flying."
            quality={100}
            className="absolute right-0 top-0" />
        </main>
      </Container>
    </div>
  )
}



// How to use components
{/* <div>
  <div>
    <div className="flex justify-around pt-2">
      <Link href="/" className={buttonVariants({ variant: "monochrome", size: "md" })} >
        <IconWrapper Icon={LikeIcon} size="md" />
      </Link>
      <Link href="/" className={buttonVariants({ variant: "monochrome", size: "md" })} >
        <IconWrapper Icon={FavIcon} size="md" />
      </Link>
      <Link href="/" className={buttonVariants({ variant: "monochrome", size: "md" })} >
        <IconWrapper Icon={DislikeIcon} size="md" />
      </Link>
    </div>
  </div>
  <div>
    <h2 className="text-2xl">Buttons</h2>
    <div className="flex justify-around pt-2">
      <Button variant={"soft"} size={"sm"}><IconWrapper Icon={BackIcon} /></Button>
      <Button variant={"soft"} size={"sm"}><IconWrapper Icon={SearchIcon} /></Button>
      <Button variant={"monochrome"} size={"sm"}><IconWrapper Icon={CloseIcon} /></Button>
      <Button variant={"monochrome"} size={"sm"}><IconWrapper Icon={FavIcon} /></Button>
      <Button variant={"monochrome"} size={"sm"}><IconWrapper Icon={FavFullIcon} /></Button>
      <Button variant={"secondary"} size={"sm"}><IconWrapper Icon={SortIcon} /></Button>
      <Button variant={"secondary"} size={"sm"}><IconWrapper Icon={SortRevertIcon} /></Button>
    </div>
    <div className="flex justify-around pt-2">
      <Button variant={"soft"}>
        <div className="flex">
          <IconWrapper Icon={UploadIcon} size="xs" />
          <div>&nbsp;&nbsp;Upload</div>
        </div>
      </Button>
      <Button variant={"primary"} state={"isActive"}>Upload photo</Button>
    </div>
  </div>
  <div >
    <h2 className="text-2xl">Button group</h2>
    <div className="flex justify-around pt-2">
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
</div> */}

{/* <div className="pt-4">
        <h2 className="text-2xl">Links</h2>
        <div className="flex justify-around pt-2">
          <ImageLink name="Voting" href="/" image={{ src: VotingImg, alt: "Clipboard", width: 100 }} />
          <ImageLink name="Breeds" href="/" image={{ src: BreedsImg, alt: "Waving cat", width: 100 }} />
          <ImageLink name="Gallery" href="/" image={{ src: GalleryImg, alt: "Hand holding phone", width: 100 }} />
        </div>
        <div className="flex justify-around pt-2">
          <Link href="/" className={buttonVariants({ variant: "activableWhite", size: "md" })} >
            <IconWrapper Icon={LikeIcon} size="md" />
          </Link>
          <Link href="/" className={buttonVariants({ variant: "activableWhite", size: "md" })} >
            <IconWrapper Icon={FavIcon} size="md" />
          </Link>
          <Link href="/" className={buttonVariants({ variant: "activableWhite", size: "md" })} >
            <IconWrapper Icon={DislikeIcon} size="md" />
          </Link>
        </div>
      </div>
      <div>
        <h2 className="text-2xl">Buttons</h2>
        <div className="flex justify-around pt-2">
          <Button variant={"primaryTransp"} size={"sm"}><IconWrapper Icon={BackIcon} /></Button>
          <Button variant={"primaryTransp"} size={"sm"}><IconWrapper Icon={SearchIcon} /></Button>
          <Button variant={"white"} size={"sm"}><IconWrapper Icon={CloseIcon} /></Button>
          <Button variant={"white"} size={"sm"}><IconWrapper Icon={FavIcon} /></Button>
          <Button variant={"white"} size={"sm"}><IconWrapper Icon={FavFullIcon} /></Button>
          <Button variant={"secondary"} size={"sm"}><IconWrapper Icon={SortIcon} /></Button>
          <Button variant={"secondary"} size={"sm"}><IconWrapper Icon={SortRevertIcon} /></Button>
        </div>
        <div className="flex justify-around pt-2">
          <Button variant={"primaryTransp"}>
            <div className="flex">
              <IconWrapper Icon={UploadIcon} size="xs" />
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
              <IconWrapper Icon={LikeIcon} size="md" />
            </Button>
            <Button variant={"groupMiddle"} size={"groupSize"}>
              <IconWrapper Icon={FavIcon} SecondaryIcon={FavFullIcon} size="md" active="white" />
            </Button>
            <Button variant={"groupLast"} size={"groupSize"}>
              <IconWrapper Icon={DislikeIcon} size="md" />
            </Button>
          </ButtonGroup>
        </div>
      </div>
      <div>
        <h2 className="text-2xl">Gallery Item</h2>
        <div className="flex justify-around pt-2">
          <GalleryItem src={CatPic} alt="img" width={200} />
        </div>
      </div> */}