import "@app/global.css"
import type { Metadata } from "next";
import { Jost } from "next/font/google";
import { Container } from "@layouts/index";
import Intro from "@app/Intro";
import Providers from "@app/providers";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CatPaw",
  description: "Tinder for cats",
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <Providers>
          {/* "Left" container is being removed from layout for 2xl and higer res devices and added to pages*/}
          <div className="xl:grid xl:grid-cols-2 xl:justify-items-end">
            <Container variant={"desktop"} className="xl:w-auto xl:justify-self-start ">
              <Intro />
            </Container>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
