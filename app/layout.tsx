import "@app/global.css"
import type { Metadata } from "next";
import { Jost } from "next/font/google";
import { Container } from "@components/layouts";
import Intro from "@app/Intro";
import ReduxProvider from "@context/Provider";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CatPaw",
  description: "Tinder for cats",
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <ReduxProvider>
          {/* "Left" container is being removed from layout for xl and higer res devices and added to pages*/}
          <div className="xl:grid xl:grid-cols-2" >
            <Container variant={"desktop"} className="relative">
              <Intro />
            </Container>
            {children}
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
