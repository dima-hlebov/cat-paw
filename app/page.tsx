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
        <main className="bg-primary/20 rounded-md w-[680px] h-[820px] dark:bg-white/5">
          <Image
            src={GirlAndPet} width={775}
            alt="Girl reaching cat with open arms. Both flying."
            quality={100}
            className="absolute top-0 right-0" />
        </main>
      </Container>
    </div>
  )
}